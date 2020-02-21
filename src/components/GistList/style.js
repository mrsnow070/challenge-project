import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    marginBottom: 2,
    flexDirection: 'row',
    paddingHorizontal: 10,
    position: 'relative',
  },
  userAvatar: {width: 100, height: 100, borderRadius: 5},
  descriptionText: {fontSize: 12},
  imageContainer: {paddingVertical: 5},
  icon: {fontSize: 25, marginRight: 5},
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  detailsItem: {flexDirection: 'row', alignItems: 'center'},
  detailsWrapper: {
    flex: 1,
    paddingBottom: 10,
    paddingRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  detailsText: {fontSize: 14},
  userLoginText: {fontWeight: '600', fontSize: 20},
  absoluteOpacity: {
    ...StyleSheet.absoluteFill,
    zIndex: 1,
  },
});
