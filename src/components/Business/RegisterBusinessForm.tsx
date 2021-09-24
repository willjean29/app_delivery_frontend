import Button from 'components/UI/Button';
import CustomInput from 'components/UI/CustomInput';
import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'components/UI/Modal';
import {ColorsApp, PermissionsApp} from 'utils/enums';
import {useDispatch} from 'react-redux';
import {askPermissions} from 'store/permissions/permissions.actions';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
const categories = [
  {
    id: 1,
    name: 'Tienda',
  },
  {
    id: 2,
    name: 'Farmacia',
  },
  {
    id: 3,
    name: 'Restaurantes',
  },
  {
    id: 4,
    name: 'Bebidas',
  },
  {
    id: 5,
    name: 'Café',
  },
];

interface RegisterBusinessFormProps {}

const RegisterBusinessForm: React.FC<RegisterBusinessFormProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const request = (permission: PermissionsApp) =>
    dispatch(askPermissions(permission));
  const form = useFormik({
    initialValues: {
      name: '',
      categorie: '',
      userName: '',
      userLastName: '',
      phone: '',
      email: '',
      direction: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('EL nombre del negocio es obligatorio'),
      categorie: Yup.string().required('Elija una categoria'),
      userName: Yup.string().required('EL nombre del encargado es obligatorio'),
      userLastName: Yup.string().required(
        'EL apellido del encargado es obligatorio',
      ),
      phone: Yup.string().required('EL telefono del negocio es obligatorio'),
      email: Yup.string()
        .required('EL email es obligatorio')
        .email('Ingrese un email válido'),
      direction: Yup.string().required('La dirección es obligatoria'),
    }),
    onSubmit: data => {
      console.log({data});
    },
  });

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
          onChangeText={form.handleChange('name')}
        />
        <SelectDropdown
          data={categories}
          onSelect={(item, index) => {
            form.setFieldValue('name', item.name);
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
          onChangeText={form.handleChange('userName')}
        />
        <CustomInput
          placeholder="Apellido"
          value={form.values.userLastName}
          errorMessage={form.errors.userLastName}
          onChangeText={form.handleChange('userLastName')}
        />
        <CustomInput
          placeholder="Telefono de contacto"
          value={form.values.phone}
          errorMessage={form.errors.phone}
          onChangeText={form.handleChange('phone')}
        />
        <CustomInput
          placeholder="Correo electrónico"
          value={form.values.email}
          errorMessage={form.errors.email}
          onChangeText={form.handleChange('email')}
        />
        <CustomInput
          placeholder="Direccion del local"
          value={form.values.direction}
          errorMessage={form.errors.direction}
          onChangeText={form.handleChange('direction')}
          iconNameRigth="location-on"
          onPressIcon={() => {
            request(PermissionsApp.LOCATION);
            setShowModal(true);
          }}
        />
        <Button title="Registrar" onPress={() => form.handleSubmit()} />
      </View>
      <Modal isVisible={showModal} setIsVisible={setShowModal}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0421,
          }}
          provider={PROVIDER_GOOGLE}
          style={{height: 400}}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {},
  viewContainerForm: {
    borderRadius: 20,
    top: -20,
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 15,
    shadowColor: '#000',
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
