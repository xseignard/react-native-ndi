import { NativeModules } from 'react-native';

type NdiType = {
  getDeviceName(): Promise<string>;
};

const { Ndi } = NativeModules;

export default Ndi as NdiType;
