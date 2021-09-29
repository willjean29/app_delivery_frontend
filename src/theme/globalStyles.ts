import {StyleSheet} from 'react-native';
import {ColorsApp} from 'utils/enums';

export const GlobalStyles = StyleSheet.create({
  // styles for layouts
  containerCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginHorinzontal: {
    marginHorizontal: 15,
  },

  // styles for buttons
  btnSelect: {
    borderRadius: 10,
    paddingHorizontal: 5,
    flex: 1,
    marginHorizontal: 5,
    borderColor: ColorsApp.PRIMARY_COLOR,
    borderWidth: 1,
  },
  btnCancel: {
    backgroundColor: ColorsApp.PRIMARY_OPACITY_COLOR,
  },
  txtBtnCancel: {
    color: ColorsApp.PRIMARY_COLOR,
  },
});
