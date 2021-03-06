namespace MidnightLizard.Colors
{
    /** Html element component */
    export enum Component
    {
        Background,
        BackgroundNoContrast,
        Text,
        TextSelection,
        HighlightedText,
        Link,
        Link$Hover,
        Link$Active,
        VisitedLink,
        VisitedLink$Hover,
        VisitedLink$Active,
        TextShadow,
        Border,
        Scrollbar$Hover,
        Scrollbar$Normal,
        Scrollbar$Active,
        Image,
        SvgBackground,
        BackgroundImage,
        ButtonBackground,
        ButtonBorder
    }

    /**
     * ComponentShift
     */
    export interface ComponentShift
    {
        Background: ColorShift;
        Text: ColorShift;
        TextSelection: ColorShift;
        HighlightedText: ColorShift;
        Link: ColorShift;
        Link$Hover: ColorShift;
        Link$Active: ColorShift;
        VisitedLink: ColorShift;
        VisitedLink$Hover: ColorShift;
        VisitedLink$Active: ColorShift;
        TextShadow: ColorShift;
        Border: ColorShift;
        Scrollbar$Hover: ColorShift;
        Scrollbar$Normal: ColorShift;
        Scrollbar$Active: ColorShift;
        Image: ColorShift;
        SvgBackground: ColorShift;
        BackgroundImage: ColorShift;
        ButtonBackground: ColorShift;
        ButtonBorder: ColorShift;
    }
}