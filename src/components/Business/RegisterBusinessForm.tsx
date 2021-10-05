import Button from 'components/UI/Button';
import CustomInput from 'components/UI/CustomInput';
import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {View, Text, StyleSheet} from 'react-native';
import {ColorsApp, PermissionsApp} from 'utils/enums';
import {useDispatch, useSelector} from 'react-redux';
import {askPermissions} from 'store/permissions/permissions.actions';
import {categoriesLoad} from 'store/categories/categories.actions';
import ModalSelectUbication from 'components/Business/ModalSelectUbication';
import {RootStore} from 'store/store';
import {Location} from 'utils/types';

interface RegisterBusinessFormProps {}

const RegisterBusinessForm: React.FC<RegisterBusinessFormProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const request = (permission: PermissionsApp) =>
    dispatch(askPermissions(permission));
  const loadCategories = () => dispatch(categoriesLoad());
  const {categories} = useSelector((store: RootStore) => store.categories);
  const {user} = useSelector((store: RootStore) => store.user);
  const [location, setLocation] = useState<Location>({} as Location);
  const form = useFormik({
    initialValues: {
      name: '',
      categorie: '',
      userName: user?.name || '',
      userLastName: user?.lastName || '',
      phone: '',
      email: '',
      direction: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('El nombre del negocio es obligatorio'),
      categorie: Yup.string().required('Elija una categoria'),
      userName: Yup.string().required('El nombre del encargado es obligatorio'),
      userLastName: Yup.string().required(
        'El apellido del encargado es obligatorio',
      ),
      phone: Yup.string().required('EL telefono del negocio es obligatorio'),
      email: Yup.string()
        .required('El email es obligatorio')
        .email('Ingrese un email válido'),
      direction: Yup.string().required('La dirección es obligatoria'),
    }),
    onSubmit: data => {
      console.log(
        JSON.stringify(
          {
            data: {
              ...data,
              location,
            },
          },
          null,
          3,
        ),
      );
    },
  });

  useEffect(() => {
    loadCategories();
  }, []);

  useFocusEffect(
    useCallback(() => {
      form.handleReset(form.initialValues);
    }, []),
  );

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewContainerForm}>
        <Text style={styles.txtTitle}>Registra tu local</Text>
        <CustomInput
          placeholder="Nombre del local"
          value={form.values.name}
          errorMessage={form.errors.name}
          autoCapitalize="words"
          onChangeText={form.handleChange('name')}
        />
        <SelectDropdown
          data={categories}
          onSelect={(item, index) => {
            form.setFieldValue('categorie', item._id);
          }}
          defaultButtonText={'Seleccione una categoria'}
          buttonTextAfterSelection={(item, index) => item.name}
          rowTextForSelection={(item, index) => item.name}
          renderDropdownIcon={(item, index) => (
            <Icon
              name="arrow-drop-down"
              size={24}
              color={ColorsApp.PRIMARY_COLOR}
            />
          )}
          dropdownIconPosition={'right'}
          buttonStyle={styles.btnSelect}
          buttonTextStyle={styles.txtBtnSelect}
          rowStyle={styles.rowItem}
          dropdownStyle={styles.containerSelect}
          renderCustomizedRowChild={(item, index) => (
            <Text
              style={{
                color: ColorsApp.PRIMARY_COLOR,
                textTransform: 'capitalize',
              }}>
              {item}
            </Text>
          )}
        />
        {form.errors.categorie && (
          <Text style={styles.txtErrorMessage}>{form.errors.categorie}</Text>
        )}
        <CustomInput
          placeholder="Nombre"
          value={form.values.userName}
          errorMessage={form.errors.userName}
          autoCapitalize={'words'}
          onChangeText={form.handleChange('userName')}
        />
        <CustomInput
          placeholder="Apellido"
          value={form.values.userLastName}
          errorMessage={form.errors.userLastName}
          autoCapitalize={'words'}
          onChangeText={form.handleChange('userLastName')}
        />
        <CustomInput
          placeholder="Telefono de contacto"
          value={form.values.phone}
          errorMessage={form.errors.phone}
          keyboardType={'numeric'}
          onChangeText={form.handleChange('phone')}
        />
        <CustomInput
          placeholder="Correo electrónico"
          value={form.values.email}
          errorMessage={form.errors.email}
          keyboardType={'email-address'}
          onChangeText={form.handleChange('email')}
        />
        <CustomInput
          placeholder="Direccion del local"
          editable={false}
          value={form.values.direction}
          errorMessage={form.errors.direction}
          onChangeText={form.handleChange('direction')}
          iconNameRigth="location-on"
          onPressIcon={() => {
            request(PermissionsApp.LOCATION);
            setShowModal(true);
          }}
        />
        <Button
          title="Registrar"
          uppercase
          onPress={() => form.handleSubmit()}
        />
      </View>
      <ModalSelectUbication
        handleDirection={(text, location) => {
          form.setFieldValue('direction', text);
          setLocation(location);
        }}
        isVisible={showModal}
        setIsVisible={setShowModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {},
  viewContainerForm: {
    borderRadius: 20,
    top: -20,
    backgroundColor: ColorsApp.WHITE_COLOR,
    padding: 15,
    marginHorizontal: 15,
    shadowColor: ColorsApp.BLACK_COLOR,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
  },
  btnSelect: {
    backgroundColor: ColorsApp.PRIMARY_OPACITY_COLOR,
    height: 35,
    width: '100%',
    borderRadius: 20,
    marginVertical: 10,
  },
  txtBtnSelect: {
    textAlign: 'left',
    fontSize: 14,
    color: ColorsApp.PRIMARY_COLOR,
    textTransform: 'capitalize',
  },
  rowItem: {
    borderBottomColor: ColorsApp.PRIMARY_OPACITY_COLOR,
    borderBottomWidth: 2,
    backgroundColor: ColorsApp.WHITE_COLOR,
  },
  txtRowItem: {},
  containerSelect: {
    borderRadius: 10,
    backgroundColor: ColorsApp.WHITE_COLOR,
  },
  txtErrorMessage: {
    color: ColorsApp.PRIMARY_COLOR,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 5,
    fontSize: 12,
  },
});

export default RegisterBusinessForm;
