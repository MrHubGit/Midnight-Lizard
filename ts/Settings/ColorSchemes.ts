/// <reference path="./ColorScheme.ts" />

namespace MidnightLizard.Settings
{

    export type ColorSchemeName = keyof typeof ColorSchemes;

    /**
     * ColorSchemes
     */
    export const ColorSchemes: {
        default: ColorScheme;
        original: ColorScheme;
        dimmedDust: ColorScheme;
        appleMint: ColorScheme;
        kappaDream: ColorScheme;
        almondRipe: ColorScheme;
        sunsetSails: ColorScheme;
        halloween: ColorScheme;
        morningMist: ColorScheme;
        antiqueCodex: ColorScheme;
        increasedContrast: ColorScheme;
        grayscale: ColorScheme;
        invertedLight: ColorScheme;
        invertedGrayscale: ColorScheme;
        yellowOnBlack: ColorScheme;
        greenOnBlack: ColorScheme;
    } = {} as any

    /**
     * DefaultColorSchemes
     */
    export const DefaultColorSchemes: ColorScheme =
        {
            userColorSchemes: [
                // Default
                {
                    userColorSchemes: [],
                    userColorSchemeIds: [],
                    colorSchemeId: "default",
                    colorSchemeName: "Default",
                    runOnThisSite: true,
                    isEnabled: true,
                    restoreColorsOnCopy: false,
                    restoreColorsOnPrint: true,
                    doNotInvertContent: false,
                    changeBrowserTheme: false,
                    blueFilter: 0,
                    mode: ProcessingMode.Automatic,
                    modeAutoSwitchLimit: 5000,

                    useDefaultSchedule: true,
                    scheduleStartHour: 0,
                    scheduleFinishHour: 24,
                    includeMatches: "",
                    excludeMatches: "",

                    backgroundSaturationLimit: 100,
                    backgroundContrast: 0,
                    backgroundLightnessLimit: 100,
                    backgroundGraySaturation: 0,
                    backgroundGrayHue: 0,
                    backgroundReplaceAllHues: false,
                    backgroundHueGravity: 0,

                    buttonSaturationLimit: 100,
                    buttonContrast: 0,
                    buttonLightnessLimit: 100,
                    buttonGraySaturation: 0,
                    buttonGrayHue: 0,
                    buttonReplaceAllHues: false,
                    buttonHueGravity: 0,

                    textSaturationLimit: 100,
                    textContrast: 0,
                    textLightnessLimit: 100,
                    textGraySaturation: 0,
                    textGrayHue: 0,
                    textSelectionHue: 0,
                    textReplaceAllHues: false,
                    textHueGravity: 0,

                    linkSaturationLimit: 100,
                    linkContrast: 0,
                    linkLightnessLimit: 100,
                    linkDefaultSaturation: 0,
                    linkDefaultHue: 0,
                    linkVisitedHue: 0,
                    linkReplaceAllHues: false,
                    linkHueGravity: 0,

                    borderSaturationLimit: 100,
                    borderContrast: 0,
                    borderLightnessLimit: 100,
                    borderGraySaturation: 0,
                    borderGrayHue: 0,
                    borderReplaceAllHues: false,
                    borderHueGravity: 0,

                    imageLightnessLimit: 100,
                    imageSaturationLimit: 100,
                    useImageHoverAnimation: false,

                    backgroundImageLightnessLimit: 100,
                    backgroundImageSaturationLimit: 100,

                    scrollbarSaturationLimit: 0,
                    scrollbarContrast: 0,
                    scrollbarLightnessLimit: 100,
                    scrollbarGrayHue: 0,
                    scrollbarSize: 0
                } as ColorScheme,

                // Original
                {
                    colorSchemeId: "original",
                    colorSchemeName: "Original (none)",
                    runOnThisSite: false,
                    restoreColorsOnCopy: false,
                    restoreColorsOnPrint: false,
                    doNotInvertContent: false,
                    blueFilter: 0,
                    mode: ProcessingMode.Automatic,
                    modeAutoSwitchLimit: 0,

                    useDefaultSchedule: true,
                    scheduleStartHour: 0,
                    scheduleFinishHour: 24,
                    includeMatches: "",
                    excludeMatches: "",

                    backgroundSaturationLimit: 100,
                    backgroundContrast: 0,
                    backgroundLightnessLimit: 100,
                    backgroundGraySaturation: 0,
                    backgroundGrayHue: 0,
                    backgroundReplaceAllHues: false,
                    backgroundHueGravity: 0,

                    buttonSaturationLimit: 100,
                    buttonContrast: 0,
                    buttonLightnessLimit: 100,
                    buttonGraySaturation: 0,
                    buttonGrayHue: 0,
                    buttonReplaceAllHues: false,
                    buttonHueGravity: 0,

                    textSaturationLimit: 100,
                    textContrast: 0,
                    textLightnessLimit: 100,
                    textGraySaturation: 0,
                    textGrayHue: 0,
                    textSelectionHue: 0,
                    textReplaceAllHues: false,
                    textHueGravity: 0,

                    linkSaturationLimit: 100,
                    linkContrast: 0,
                    linkLightnessLimit: 100,
                    linkDefaultSaturation: 0,
                    linkDefaultHue: 0,
                    linkVisitedHue: 0,
                    linkReplaceAllHues: false,
                    linkHueGravity: 0,

                    borderSaturationLimit: 100,
                    borderContrast: 0,
                    borderLightnessLimit: 100,
                    borderGraySaturation: 0,
                    borderGrayHue: 0,
                    borderReplaceAllHues: false,
                    borderHueGravity: 0,

                    imageLightnessLimit: 100,
                    imageSaturationLimit: 100,
                    useImageHoverAnimation: false,

                    backgroundImageLightnessLimit: 100,
                    backgroundImageSaturationLimit: 100,

                    scrollbarSaturationLimit: 0,
                    scrollbarContrast: 0,
                    scrollbarLightnessLimit: 100,
                    scrollbarGrayHue: 0,
                    scrollbarSize: 0
                } as ColorScheme,

                // Dimmed Dust
                {
                    colorSchemeId: "dimmedDust",
                    colorSchemeName: "Dimmed Dust",
                    runOnThisSite: true,
                    restoreColorsOnCopy: false,
                    restoreColorsOnPrint: true,
                    doNotInvertContent: false,
                    blueFilter: 0,
                    mode: ProcessingMode.Automatic,
                    modeAutoSwitchLimit: 5000,

                    useDefaultSchedule: true,
                    scheduleStartHour: 0,
                    scheduleFinishHour: 24,
                    includeMatches: "",
                    excludeMatches: "",

                    backgroundSaturationLimit: 65,
                    backgroundContrast: 50,
                    backgroundLightnessLimit: 14,
                    backgroundGraySaturation: 5,
                    backgroundGrayHue: 200,
                    backgroundReplaceAllHues: false,
                    backgroundHueGravity: 0,

                    buttonSaturationLimit: 80,
                    buttonContrast: 4,
                    buttonLightnessLimit: 17,
                    buttonGraySaturation: 10,
                    buttonGrayHue: 200,
                    buttonReplaceAllHues: false,
                    buttonHueGravity: 0,

                    textSaturationLimit: 90,
                    textContrast: 64,
                    textLightnessLimit: 85,
                    textGraySaturation: 20,
                    textGrayHue: 16,
                    textSelectionHue: 207,
                    textReplaceAllHues: false,
                    textHueGravity: 0,

                    linkSaturationLimit: 80,
                    linkContrast: 55,
                    linkLightnessLimit: 66,
                    linkDefaultSaturation: 74,
                    linkDefaultHue: 207,
                    linkVisitedHue: 262,
                    linkReplaceAllHues: false,
                    linkHueGravity: 80,

                    borderSaturationLimit: 80,
                    borderContrast: 30,
                    borderLightnessLimit: 50,
                    borderGraySaturation: 20,
                    borderGrayHue: 16,
                    borderReplaceAllHues: false,
                    borderHueGravity: 0,

                    imageLightnessLimit: 80,
                    imageSaturationLimit: 90,
                    useImageHoverAnimation: false,

                    backgroundImageLightnessLimit: 40,
                    backgroundImageSaturationLimit: 80,

                    scrollbarSaturationLimit: 5,
                    scrollbarContrast: 0,
                    scrollbarLightnessLimit: 40,
                    scrollbarGrayHue: 16,
                    scrollbarSize: 10
                } as ColorScheme,

                // Apple Mint
                {
                    colorSchemeId: "appleMint",
                    colorSchemeName: "Apple Mint",
                    runOnThisSite: true,
                    restoreColorsOnCopy: false,
                    restoreColorsOnPrint: true,
                    doNotInvertContent: false,
                    blueFilter: 0,
                    mode: ProcessingMode.Automatic,
                    modeAutoSwitchLimit: 5000,

                    useDefaultSchedule: true,
                    scheduleStartHour: 0,
                    scheduleFinishHour: 24,
                    includeMatches: "",
                    excludeMatches: "",

                    backgroundSaturationLimit: 60,
                    backgroundContrast: 50,
                    backgroundLightnessLimit: 14,
                    backgroundGraySaturation: 60,
                    backgroundGrayHue: 170,
                    backgroundReplaceAllHues: false,
                    backgroundHueGravity: 80,

                    buttonSaturationLimit: 60,
                    buttonContrast: 3,
                    buttonLightnessLimit: 16,
                    buttonGraySaturation: 50,
                    buttonGrayHue: 164,
                    buttonReplaceAllHues: false,
                    buttonHueGravity: 80,

                    textSaturationLimit: 60,
                    textContrast: 60,
                    textLightnessLimit: 90,
                    textGraySaturation: 20,
                    textGrayHue: 88,
                    textSelectionHue: 88,
                    textReplaceAllHues: false,
                    textHueGravity: 80,

                    linkSaturationLimit: 60,
                    linkContrast: 60,
                    linkLightnessLimit: 80,
                    linkDefaultSaturation: 60,
                    linkDefaultHue: 85,
                    linkVisitedHue: 34,
                    linkReplaceAllHues: false,
                    linkHueGravity: 80,

                    borderSaturationLimit: 60,
                    borderContrast: 30,
                    borderLightnessLimit: 50,
                    borderGraySaturation: 10,
                    borderGrayHue: 130,
                    borderReplaceAllHues: false,
                    borderHueGravity: 80,

                    imageLightnessLimit: 80,
                    imageSaturationLimit: 100,
                    useImageHoverAnimation: false,

                    backgroundImageLightnessLimit: 40,
                    backgroundImageSaturationLimit: 100,

                    scrollbarSaturationLimit: 10,
                    scrollbarContrast: 0,
                    scrollbarLightnessLimit: 40,
                    scrollbarGrayHue: 133,
                    scrollbarSize: 10
                } as ColorScheme,

                // Kappa Dream
                {
                    colorSchemeId: "kappaDream",
                    colorSchemeName: "Kappa Dream",
                    runOnThisSite: true,
                    restoreColorsOnCopy: false,
                    restoreColorsOnPrint: true,
                    doNotInvertContent: false,
                    blueFilter: 0,
                    mode: ProcessingMode.Automatic,
                    modeAutoSwitchLimit: 5000,

                    useDefaultSchedule: true,
                    scheduleStartHour: 0,
                    scheduleFinishHour: 24,
                    includeMatches: "",
                    excludeMatches: "",

                    backgroundSaturationLimit: 60,
                    backgroundContrast: 50,
                    backgroundLightnessLimit: 15,
                    backgroundGraySaturation: 30,
                    backgroundGrayHue: 122,
                    backgroundReplaceAllHues: false,
                    backgroundHueGravity: 80,

                    buttonSaturationLimit: 60,
                    buttonContrast: 4,
                    buttonLightnessLimit: 18,
                    buttonGraySaturation: 40,
                    buttonGrayHue: 110,
                    buttonReplaceAllHues: false,
                    buttonHueGravity: 80,

                    textSaturationLimit: 60,
                    textContrast: 60,
                    textLightnessLimit: 90,
                    textGraySaturation: 30,
                    textGrayHue: 72,
                    textSelectionHue: 132,
                    textReplaceAllHues: false,
                    textHueGravity: 80,

                    linkSaturationLimit: 60,
                    linkContrast: 55,
                    linkLightnessLimit: 80,
                    linkDefaultSaturation: 70,
                    linkDefaultHue: 68,
                    linkVisitedHue: 34,
                    linkReplaceAllHues: false,
                    linkHueGravity: 80,

                    borderSaturationLimit: 60,
                    borderContrast: 30,
                    borderLightnessLimit: 50,
                    borderGraySaturation: 20,
                    borderGrayHue: 82,
                    borderReplaceAllHues: false,
                    borderHueGravity: 80,

                    imageLightnessLimit: 80,
                    imageSaturationLimit: 100,
                    useImageHoverAnimation: false,

                    backgroundImageLightnessLimit: 40,
                    backgroundImageSaturationLimit: 100,

                    scrollbarSaturationLimit: 20,
                    scrollbarContrast: 0,
                    scrollbarLightnessLimit: 40,
                    scrollbarGrayHue: 120,
                    scrollbarSize: 10
                } as ColorScheme,

                // Almond Ripe
                {
                    colorSchemeId: "almondRipe",
                    colorSchemeName: "Almond Ripe",
                    runOnThisSite: true,
                    restoreColorsOnCopy: false,
                    restoreColorsOnPrint: true,
                    doNotInvertContent: false,
                    blueFilter: 5,
                    mode: ProcessingMode.Automatic,
                    modeAutoSwitchLimit: 5000,

                    useDefaultSchedule: true,
                    scheduleStartHour: 0,
                    scheduleFinishHour: 24,
                    includeMatches: "",
                    excludeMatches: "",

                    backgroundSaturationLimit: 60,
                    backgroundContrast: 50,
                    backgroundLightnessLimit: 11,
                    backgroundGraySaturation: 30,
                    backgroundGrayHue: 36,
                    backgroundReplaceAllHues: false,
                    backgroundHueGravity: 80,

                    buttonSaturationLimit: 60,
                    buttonContrast: 3,
                    buttonLightnessLimit: 13,
                    buttonGraySaturation: 50,
                    buttonGrayHue: 18,
                    buttonReplaceAllHues: false,
                    buttonHueGravity: 80,

                    textSaturationLimit: 60,
                    textContrast: 64,
                    textLightnessLimit: 85,
                    textGraySaturation: 10,
                    textGrayHue: 90,
                    textSelectionHue: 32,
                    textReplaceAllHues: false,
                    textHueGravity: 80,

                    linkSaturationLimit: 60,
                    linkContrast: 50,
                    linkLightnessLimit: 70,
                    linkDefaultSaturation: 60,
                    linkDefaultHue: 88,
                    linkVisitedHue: 36,
                    linkReplaceAllHues: false,
                    linkHueGravity: 80,

                    borderSaturationLimit: 60,
                    borderContrast: 30,
                    borderLightnessLimit: 50,
                    borderGraySaturation: 20,
                    borderGrayHue: 60,
                    borderReplaceAllHues: false,
                    borderHueGravity: 80,

                    imageLightnessLimit: 80,
                    imageSaturationLimit: 90,
                    useImageHoverAnimation: false,

                    backgroundImageLightnessLimit: 40,
                    backgroundImageSaturationLimit: 80,

                    scrollbarSaturationLimit: 20,
                    scrollbarContrast: 0,
                    scrollbarLightnessLimit: 40,
                    scrollbarGrayHue: 45,
                    scrollbarSize: 10
                } as ColorScheme,

                // Sunset Sails
                {
                    colorSchemeId: "sunsetSails",
                    colorSchemeName: "Sunset Sails",
                    runOnThisSite: true,
                    restoreColorsOnCopy: false,
                    restoreColorsOnPrint: true,
                    doNotInvertContent: false,
                    blueFilter: 30,
                    mode: ProcessingMode.Automatic,
                    modeAutoSwitchLimit: 5000,

                    useDefaultSchedule: true,
                    scheduleStartHour: 0,
                    scheduleFinishHour: 24,
                    includeMatches: "",
                    excludeMatches: "",

                    backgroundSaturationLimit: 80,
                    backgroundContrast: 50,
                    backgroundLightnessLimit: 15,
                    backgroundGraySaturation: 30,
                    backgroundGrayHue: 4,
                    backgroundReplaceAllHues: false,
                    backgroundHueGravity: 20,

                    buttonSaturationLimit: 80,
                    buttonContrast: 4,
                    buttonLightnessLimit: 18,
                    buttonGraySaturation: 40,
                    buttonGrayHue: 14,
                    buttonReplaceAllHues: false,
                    buttonHueGravity: 20,

                    textSaturationLimit: 90,
                    textContrast: 64,
                    textLightnessLimit: 90,
                    textGraySaturation: 20,
                    textGrayHue: 45,
                    textSelectionHue: 322,
                    textReplaceAllHues: false,
                    textHueGravity: 20,

                    linkSaturationLimit: 70,
                    linkContrast: 55,
                    linkLightnessLimit: 80,
                    linkDefaultSaturation: 70,
                    linkDefaultHue: 45,
                    linkVisitedHue: 14,
                    linkReplaceAllHues: false,
                    linkHueGravity: 80,

                    borderSaturationLimit: 80,
                    borderContrast: 30,
                    borderLightnessLimit: 50,
                    borderGraySaturation: 20,
                    borderGrayHue: 14,
                    borderReplaceAllHues: false,
                    borderHueGravity: 20,

                    imageLightnessLimit: 80,
                    imageSaturationLimit: 100,
                    useImageHoverAnimation: false,

                    backgroundImageLightnessLimit: 40,
                    backgroundImageSaturationLimit: 100,

                    scrollbarSaturationLimit: 20,
                    scrollbarContrast: 0,
                    scrollbarLightnessLimit: 40,
                    scrollbarGrayHue: 36,
                    scrollbarSize: 10
                } as ColorScheme,

                // Halloween
                {
                    colorSchemeId: "halloween",
                    colorSchemeName: "Halloween",
                    runOnThisSite: true,
                    restoreColorsOnCopy: false,
                    restoreColorsOnPrint: true,
                    doNotInvertContent: false,
                    blueFilter: 80,
                    mode: ProcessingMode.Automatic,
                    modeAutoSwitchLimit: 5000,

                    useDefaultSchedule: true,
                    scheduleStartHour: 0,
                    scheduleFinishHour: 24,
                    includeMatches: "",
                    excludeMatches: "",

                    backgroundSaturationLimit: 80,
                    backgroundContrast: 60,
                    backgroundLightnessLimit: 7,
                    backgroundGraySaturation: 80,
                    backgroundGrayHue: 16,
                    backgroundReplaceAllHues: false,
                    backgroundHueGravity: 20,

                    buttonSaturationLimit: 80,
                    buttonContrast: 4,
                    buttonLightnessLimit: 12,
                    buttonGraySaturation: 80,
                    buttonGrayHue: 14,
                    buttonReplaceAllHues: false,
                    buttonHueGravity: 20,

                    textSaturationLimit: 90,
                    textContrast: 64,
                    textLightnessLimit: 90,
                    textGraySaturation: 80,
                    textGrayHue: 14,
                    textSelectionHue: 4,
                    textReplaceAllHues: false,
                    textHueGravity: 20,

                    linkSaturationLimit: 90,
                    linkContrast: 55,
                    linkLightnessLimit: 100,
                    linkDefaultSaturation: 100,
                    linkDefaultHue: 14,
                    linkVisitedHue: 4,
                    linkReplaceAllHues: false,
                    linkHueGravity: 80,

                    borderSaturationLimit: 80,
                    borderContrast: 30,
                    borderLightnessLimit: 60,
                    borderGraySaturation: 100,
                    borderGrayHue: 4,
                    borderReplaceAllHues: false,
                    borderHueGravity: 20,

                    imageLightnessLimit: 80,
                    imageSaturationLimit: 90,
                    useImageHoverAnimation: false,

                    backgroundImageLightnessLimit: 40,
                    backgroundImageSaturationLimit: 80,

                    scrollbarSaturationLimit: 30,
                    scrollbarContrast: 0,
                    scrollbarLightnessLimit: 20,
                    scrollbarGrayHue: 16,
                    scrollbarSize: 10
                } as ColorScheme,

                // Morning Mist
                {
                    colorSchemeId: "morningMist",
                    colorSchemeName: "Morning Mist",
                    runOnThisSite: true,
                    restoreColorsOnCopy: false,
                    restoreColorsOnPrint: true,
                    doNotInvertContent: false,
                    blueFilter: 0,
                    mode: ProcessingMode.Automatic,
                    modeAutoSwitchLimit: 5000,

                    useDefaultSchedule: true,
                    scheduleStartHour: 0,
                    scheduleFinishHour: 24,
                    includeMatches: "",
                    excludeMatches: "",

                    backgroundSaturationLimit: 90,
                    backgroundContrast: 50,
                    backgroundLightnessLimit: 90,
                    backgroundGraySaturation: 10,
                    backgroundGrayHue: 200,
                    backgroundReplaceAllHues: false,
                    backgroundHueGravity: 0,

                    buttonSaturationLimit: 90,
                    buttonContrast: 10,
                    buttonLightnessLimit: 85,
                    buttonGraySaturation: 30,
                    buttonGrayHue: 200,
                    buttonReplaceAllHues: false,
                    buttonHueGravity: 0,

                    textSaturationLimit: 90,
                    textContrast: 60,
                    textLightnessLimit: 98,
                    textGraySaturation: 20,
                    textGrayHue: 194,
                    textSelectionHue: 222,
                    textReplaceAllHues: false,
                    textHueGravity: 0,

                    linkSaturationLimit: 90,
                    linkContrast: 60,
                    linkLightnessLimit: 100,
                    linkDefaultSaturation: 100,
                    linkDefaultHue: 227,
                    linkVisitedHue: 295,
                    linkReplaceAllHues: false,
                    linkHueGravity: 80,

                    borderSaturationLimit: 90,
                    borderContrast: 40,
                    borderLightnessLimit: 98,
                    borderGraySaturation: 20,
                    borderGrayHue: 196,
                    borderReplaceAllHues: false,
                    borderHueGravity: 0,

                    imageLightnessLimit: 90,
                    imageSaturationLimit: 90,
                    useImageHoverAnimation: false,

                    backgroundImageLightnessLimit: 90,
                    backgroundImageSaturationLimit: 90,

                    scrollbarSaturationLimit: 15,
                    scrollbarContrast: 5,
                    scrollbarLightnessLimit: 80,
                    scrollbarGrayHue: 188,
                    scrollbarSize: 10
                } as ColorScheme,

                // Antique Codex
                {
                    colorSchemeId: "antiqueCodex",
                    colorSchemeName: "Antique Codex",
                    runOnThisSite: true,
                    restoreColorsOnCopy: false,
                    restoreColorsOnPrint: true,
                    doNotInvertContent: false,
                    blueFilter: 5,
                    mode: ProcessingMode.Automatic,
                    modeAutoSwitchLimit: 5000,

                    useDefaultSchedule: true,
                    scheduleStartHour: 0,
                    scheduleFinishHour: 24,
                    includeMatches: "",
                    excludeMatches: "",

                    backgroundSaturationLimit: 30,
                    backgroundContrast: 50,
                    backgroundLightnessLimit: 93,
                    backgroundGraySaturation: 50,
                    backgroundGrayHue: 45,
                    backgroundReplaceAllHues: false,
                    backgroundHueGravity: 0,

                    buttonSaturationLimit: 40,
                    buttonContrast: 10,
                    buttonLightnessLimit: 85,
                    buttonGraySaturation: 50,
                    buttonGrayHue: 38,
                    buttonReplaceAllHues: false,
                    buttonHueGravity: 0,

                    textSaturationLimit: 90,
                    textContrast: 80,
                    textLightnessLimit: 100,
                    textGraySaturation: 40,
                    textGrayHue: 16,
                    textSelectionHue: 20,
                    textReplaceAllHues: false,
                    textHueGravity: 0,

                    linkSaturationLimit: 90,
                    linkContrast: 65,
                    linkLightnessLimit: 100,
                    linkDefaultSaturation: 100,
                    linkDefaultHue: 32,
                    linkVisitedHue: 15,
                    linkReplaceAllHues: false,
                    linkHueGravity: 80,

                    borderSaturationLimit: 80,
                    borderContrast: 60,
                    borderLightnessLimit: 100,
                    borderGraySaturation: 40,
                    borderGrayHue: 34,
                    borderReplaceAllHues: false,
                    borderHueGravity: 0,

                    imageLightnessLimit: 93,
                    imageSaturationLimit: 50,
                    useImageHoverAnimation: false,

                    backgroundImageLightnessLimit: 93,
                    backgroundImageSaturationLimit: 30,

                    scrollbarSaturationLimit: 15,
                    scrollbarContrast: 5,
                    scrollbarLightnessLimit: 85,
                    scrollbarGrayHue: 20,
                    scrollbarSize: 10
                } as ColorScheme,

                // Increased Contrast
                {
                    colorSchemeId: "increasedContrast",
                    colorSchemeName: "Increased Contrast",
                    runOnThisSite: true,
                    restoreColorsOnCopy: false,
                    restoreColorsOnPrint: true,
                    doNotInvertContent: false,
                    blueFilter: 0,
                    mode: ProcessingMode.Automatic,
                    modeAutoSwitchLimit: 5000,

                    useDefaultSchedule: true,
                    scheduleStartHour: 0,
                    scheduleFinishHour: 24,
                    includeMatches: "",
                    excludeMatches: "",

                    backgroundSaturationLimit: 100,
                    backgroundContrast: 50,
                    backgroundLightnessLimit: 100,
                    backgroundGraySaturation: 0,
                    backgroundGrayHue: 240,
                    backgroundReplaceAllHues: false,
                    backgroundHueGravity: 0,

                    buttonSaturationLimit: 100,
                    buttonContrast: 10,
                    buttonLightnessLimit: 90,
                    buttonGraySaturation: 0,
                    buttonGrayHue: 240,
                    buttonReplaceAllHues: false,
                    buttonHueGravity: 0,

                    textSaturationLimit: 100,
                    textContrast: 65,
                    textLightnessLimit: 100,
                    textGraySaturation: 40,
                    textGrayHue: 16,
                    textSelectionHue: 231,
                    textReplaceAllHues: false,
                    textHueGravity: 0,

                    linkSaturationLimit: 100,
                    linkContrast: 65,
                    linkLightnessLimit: 100,
                    linkDefaultSaturation: 100,
                    linkDefaultHue: 231,
                    linkVisitedHue: 291,
                    linkReplaceAllHues: false,
                    linkHueGravity: 50,

                    borderSaturationLimit: 100,
                    borderContrast: 55,
                    borderLightnessLimit: 100,
                    borderGraySaturation: 10,
                    borderGrayHue: 16,
                    borderReplaceAllHues: false,
                    borderHueGravity: 0,

                    imageLightnessLimit: 100,
                    imageSaturationLimit: 100,
                    useImageHoverAnimation: false,

                    backgroundImageLightnessLimit: 100,
                    backgroundImageSaturationLimit: 100,

                    scrollbarSaturationLimit: 0,
                    scrollbarContrast: 5,
                    scrollbarLightnessLimit: 90,
                    scrollbarGrayHue: 240,
                    scrollbarSize: 10
                } as ColorScheme,

                // Grayscale
                {
                    colorSchemeId: "grayscale",
                    colorSchemeName: "Grayscale",
                    runOnThisSite: true,
                    restoreColorsOnCopy: false,
                    restoreColorsOnPrint: true,
                    doNotInvertContent: false,
                    blueFilter: 0,
                    mode: ProcessingMode.Automatic,
                    modeAutoSwitchLimit: 5000,

                    useDefaultSchedule: true,
                    scheduleStartHour: 0,
                    scheduleFinishHour: 24,
                    includeMatches: "",
                    excludeMatches: "",

                    backgroundSaturationLimit: 10,
                    backgroundContrast: 50,
                    backgroundLightnessLimit: 100,
                    backgroundGraySaturation: 0,
                    backgroundGrayHue: 240,
                    backgroundReplaceAllHues: false,
                    backgroundHueGravity: 0,

                    buttonSaturationLimit: 20,
                    buttonContrast: 5,
                    buttonLightnessLimit: 95,
                    buttonGraySaturation: 0,
                    buttonGrayHue: 240,
                    buttonReplaceAllHues: false,
                    buttonHueGravity: 0,

                    textSaturationLimit: 10,
                    textContrast: 60,
                    textLightnessLimit: 100,
                    textGraySaturation: 0,
                    textGrayHue: 240,
                    textSelectionHue: 231,
                    textReplaceAllHues: false,
                    textHueGravity: 0,

                    linkSaturationLimit: 25,
                    linkContrast: 60,
                    linkLightnessLimit: 100,
                    linkDefaultSaturation: 25,
                    linkDefaultHue: 231,
                    linkVisitedHue: 291,
                    linkReplaceAllHues: false,
                    linkHueGravity: 80,

                    borderSaturationLimit: 10,
                    borderContrast: 40,
                    borderLightnessLimit: 100,
                    borderGraySaturation: 0,
                    borderGrayHue: 240,
                    borderReplaceAllHues: false,
                    borderHueGravity: 0,

                    imageLightnessLimit: 100,
                    imageSaturationLimit: 10,
                    useImageHoverAnimation: false,

                    backgroundImageLightnessLimit: 100,
                    backgroundImageSaturationLimit: 10,

                    scrollbarSaturationLimit: 0,
                    scrollbarContrast: 5,
                    scrollbarLightnessLimit: 80,
                    scrollbarGrayHue: 240,
                    scrollbarSize: 10
                } as ColorScheme,

                // Inverted Light
                {
                    colorSchemeId: "invertedLight",
                    colorSchemeName: "Inverted Light",
                    runOnThisSite: true,
                    restoreColorsOnCopy: false,
                    restoreColorsOnPrint: true,
                    doNotInvertContent: false,
                    blueFilter: 0,
                    mode: ProcessingMode.Automatic,
                    modeAutoSwitchLimit: 5000,

                    useDefaultSchedule: true,
                    scheduleStartHour: 0,
                    scheduleFinishHour: 24,
                    includeMatches: "",
                    excludeMatches: "",

                    backgroundSaturationLimit: 80,
                    backgroundContrast: 50,
                    backgroundLightnessLimit: 10,
                    backgroundGraySaturation: 0,
                    backgroundGrayHue: 190,
                    backgroundReplaceAllHues: false,
                    backgroundHueGravity: 0,

                    buttonSaturationLimit: 80,
                    buttonContrast: 4,
                    buttonLightnessLimit: 15,
                    buttonGraySaturation: 0,
                    buttonGrayHue: 190,
                    buttonReplaceAllHues: false,
                    buttonHueGravity: 0,

                    textSaturationLimit: 90,
                    textContrast: 75,
                    textLightnessLimit: 95,
                    textGraySaturation: 0,
                    textGrayHue: 190,
                    textSelectionHue: 207,
                    textReplaceAllHues: false,
                    textHueGravity: 0,

                    linkSaturationLimit: 80,
                    linkContrast: 65,
                    linkLightnessLimit: 85,
                    linkDefaultSaturation: 80,
                    linkDefaultHue: 231,
                    linkVisitedHue: 291,
                    linkReplaceAllHues: false,
                    linkHueGravity: 50,

                    borderSaturationLimit: 80,
                    borderContrast: 30,
                    borderLightnessLimit: 70,
                    borderGraySaturation: 0,
                    borderGrayHue: 190,
                    borderReplaceAllHues: false,
                    borderHueGravity: 0,

                    imageLightnessLimit: 75,
                    imageSaturationLimit: 100,
                    useImageHoverAnimation: false,

                    backgroundImageLightnessLimit: 40,
                    backgroundImageSaturationLimit: 100,

                    scrollbarSaturationLimit: 0,
                    scrollbarContrast: 0,
                    scrollbarLightnessLimit: 40,
                    scrollbarGrayHue: 190,
                    scrollbarSize: 10
                } as ColorScheme,

                // Inverted Grayscale
                {
                    colorSchemeId: "invertedGrayscale",
                    colorSchemeName: "Inverted Grayscale",
                    runOnThisSite: true,
                    restoreColorsOnCopy: false,
                    restoreColorsOnPrint: true,
                    doNotInvertContent: false,
                    blueFilter: 0,
                    mode: ProcessingMode.Automatic,
                    modeAutoSwitchLimit: 5000,

                    useDefaultSchedule: true,
                    scheduleStartHour: 0,
                    scheduleFinishHour: 24,
                    includeMatches: "",
                    excludeMatches: "",

                    backgroundSaturationLimit: 10,
                    backgroundContrast: 50,
                    backgroundLightnessLimit: 10,
                    backgroundGraySaturation: 0,
                    backgroundGrayHue: 190,
                    backgroundReplaceAllHues: false,
                    backgroundHueGravity: 0,

                    buttonSaturationLimit: 20,
                    buttonContrast: 2,
                    buttonLightnessLimit: 7,
                    buttonGraySaturation: 0,
                    buttonGrayHue: 190,
                    buttonReplaceAllHues: false,
                    buttonHueGravity: 0,

                    textSaturationLimit: 10,
                    textContrast: 75,
                    textLightnessLimit: 95,
                    textGraySaturation: 0,
                    textGrayHue: 190,
                    textSelectionHue: 231,
                    textReplaceAllHues: false,
                    textHueGravity: 0,

                    linkSaturationLimit: 20,
                    linkContrast: 70,
                    linkLightnessLimit: 85,
                    linkDefaultSaturation: 25,
                    linkDefaultHue: 231,
                    linkVisitedHue: 291,
                    linkReplaceAllHues: false,
                    linkHueGravity: 80,

                    borderSaturationLimit: 10,
                    borderContrast: 30,
                    borderLightnessLimit: 50,
                    borderGraySaturation: 0,
                    borderGrayHue: 190,
                    borderReplaceAllHues: false,
                    borderHueGravity: 0,

                    imageLightnessLimit: 75,
                    imageSaturationLimit: 10,
                    useImageHoverAnimation: false,

                    backgroundImageLightnessLimit: 30,
                    backgroundImageSaturationLimit: 10,

                    scrollbarSaturationLimit: 0,
                    scrollbarContrast: 0,
                    scrollbarLightnessLimit: 40,
                    scrollbarGrayHue: 190,
                    scrollbarSize: 10
                } as ColorScheme,

                // Yellow on Black
                {
                    colorSchemeId: "yellowOnBlack",
                    colorSchemeName: "Yellow on Black",
                    runOnThisSite: true,
                    restoreColorsOnCopy: false,
                    restoreColorsOnPrint: true,
                    doNotInvertContent: false,
                    blueFilter: 0,
                    mode: ProcessingMode.Automatic,
                    modeAutoSwitchLimit: 5000,

                    useDefaultSchedule: true,
                    scheduleStartHour: 0,
                    scheduleFinishHour: 24,
                    includeMatches: "",
                    excludeMatches: "",

                    backgroundSaturationLimit: 80,
                    backgroundContrast: 50,
                    backgroundLightnessLimit: 10,
                    backgroundGraySaturation: 0,
                    backgroundGrayHue: 55,
                    backgroundReplaceAllHues: false,
                    backgroundHueGravity: 0,

                    buttonSaturationLimit: 80,
                    buttonContrast: 3,
                    buttonLightnessLimit: 12,
                    buttonGraySaturation: 0,
                    buttonGrayHue: 55,
                    buttonReplaceAllHues: false,
                    buttonHueGravity: 0,

                    textSaturationLimit: 60,
                    textContrast: 60,
                    textLightnessLimit: 90,
                    textGraySaturation: 80,
                    textGrayHue: 54,
                    textSelectionHue: 231,
                    textReplaceAllHues: false,
                    textHueGravity: 60,

                    linkSaturationLimit: 80,
                    linkContrast: 55,
                    linkLightnessLimit: 80,
                    linkDefaultSaturation: 90,
                    linkDefaultHue: 60,
                    linkVisitedHue: 40,
                    linkReplaceAllHues: false,
                    linkHueGravity: 60,

                    borderSaturationLimit: 60,
                    borderContrast: 40,
                    borderLightnessLimit: 70,
                    borderGraySaturation: 50,
                    borderGrayHue: 54,
                    borderReplaceAllHues: false,
                    borderHueGravity: 80,

                    imageLightnessLimit: 75,
                    imageSaturationLimit: 100,
                    useImageHoverAnimation: false,

                    backgroundImageLightnessLimit: 40,
                    backgroundImageSaturationLimit: 100,

                    scrollbarSaturationLimit: 40,
                    scrollbarContrast: 0,
                    scrollbarLightnessLimit: 50,
                    scrollbarGrayHue: 54,
                    scrollbarSize: 10
                } as ColorScheme,

                // Green on Black
                {
                    colorSchemeId: "greenOnBlack",
                    colorSchemeName: "Green on Black",
                    runOnThisSite: true,
                    restoreColorsOnCopy: false,
                    restoreColorsOnPrint: true,
                    doNotInvertContent: false,
                    blueFilter: 0,
                    mode: ProcessingMode.Automatic,
                    modeAutoSwitchLimit: 5000,

                    useDefaultSchedule: true,
                    scheduleStartHour: 0,
                    scheduleFinishHour: 24,
                    includeMatches: "",
                    excludeMatches: "",

                    backgroundSaturationLimit: 80,
                    backgroundContrast: 50,
                    backgroundLightnessLimit: 10,
                    backgroundGraySaturation: 0,
                    backgroundGrayHue: 125,
                    backgroundReplaceAllHues: false,
                    backgroundHueGravity: 0,

                    buttonSaturationLimit: 80,
                    buttonContrast: 3,
                    buttonLightnessLimit: 12,
                    buttonGraySaturation: 0,
                    buttonGrayHue: 125,
                    buttonReplaceAllHues: false,
                    buttonHueGravity: 0,

                    textSaturationLimit: 60,
                    textContrast: 60,
                    textLightnessLimit: 90,
                    textGraySaturation: 80,
                    textGrayHue: 122,
                    textSelectionHue: 231,
                    textReplaceAllHues: false,
                    textHueGravity: 60,

                    linkSaturationLimit: 80,
                    linkContrast: 55,
                    linkLightnessLimit: 80,
                    linkDefaultSaturation: 90,
                    linkDefaultHue: 88,
                    linkVisitedHue: 42,
                    linkReplaceAllHues: false,
                    linkHueGravity: 60,

                    borderSaturationLimit: 60,
                    borderContrast: 40,
                    borderLightnessLimit: 70,
                    borderGraySaturation: 50,
                    borderGrayHue: 122,
                    borderReplaceAllHues: false,
                    borderHueGravity: 80,

                    imageLightnessLimit: 75,
                    imageSaturationLimit: 100,
                    useImageHoverAnimation: false,

                    backgroundImageLightnessLimit: 40,
                    backgroundImageSaturationLimit: 100,

                    scrollbarSaturationLimit: 40,
                    scrollbarContrast: 0,
                    scrollbarLightnessLimit: 50,
                    scrollbarGrayHue: 122,
                    scrollbarSize: 10
                } as ColorScheme
            ]
        } as any as ColorScheme
}