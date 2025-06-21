export const RouteNames = {
    HOME_TAB: 'Home-Tab' as const,
    HOME: 'Home' as const,
    SHOPPING: 'Shopping' as const,
    BROWSER: 'Browser' as const,
}

export type RootStackParamList = {
    [RouteNames.HOME_TAB]: undefined;
    [RouteNames.BROWSER]: undefined;
};