export enum Size {
    ExtraSmall = "xs",
    Small = "sm",
    Medium = "md",
    Large = "lg",
    ExtraLarge = "xl"
}

export type SelectionPair = {
    label: string;
    value: string | null;
};

export enum ButtonType {
    Primary = "primary",
    Secondary = "secondary",
    Danger = "danger",
    Warning = "warning"
}
