import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    borderWidth: 1,
    paddingHorizontal: 8,
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: '#fafbfc',
    borderColor: '#e1e4e8',
    borderRadius: 3,
  },
  iconWrapper: {marginRight: 8},
  icon: {fontSize: 50},
  fileNameWrapper: {flex: 1},
  fileNameText: {flexShrink: 1, textAlign: 'center'},
  absoluteOpacity: {
    ...StyleSheet.absoluteFill,
    zIndex: 1,
  },
});
