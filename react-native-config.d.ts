declare module 'react-native-config' {
    export interface NativeConfig {
        PUBLIC_KEY?: string;
        SECRET_KEY?: string;
    }

    export const Config: NativeConfig;
    export default Config;
}
