import { FieldErrors, FieldValues, UseFormReturn } from '../types';
export declare function createFormControl<TFieldValues extends FieldValues = FieldValues, TContext = any>(props: Partial<{
    mode: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all";
    disabled: boolean;
    reValidateMode: "onBlur" | "onChange" | "onSubmit";
    defaultValues: ((payload?: unknown) => Promise<TFieldValues>) | import("../types").DefaultValues<TFieldValues>;
    values: TFieldValues;
    errors: FieldErrors<TFieldValues>;
    resetOptions: Partial<{
        keepDirtyValues: boolean;
        keepErrors: boolean;
        keepDirty: boolean;
        keepValues: boolean;
        keepDefaultValues: boolean;
        keepIsSubmitted: boolean;
        keepIsSubmitSuccessful: boolean;
        keepTouched: boolean;
        keepIsValid: boolean;
        keepSubmitCount: boolean;
    }> | undefined;
    resolver: import("../types").Resolver<TFieldValues, TContext>;
    context: TContext;
    shouldFocusError: boolean;
    shouldUnregister: boolean;
    shouldUseNativeValidation: boolean;
    progressive: boolean;
    criteriaMode: import("../types").CriteriaMode;
    delayError: number;
}> | undefined, flushRootRender: () => void): Omit<UseFormReturn<TFieldValues, TContext>, 'formState'>;
//# sourceMappingURL=createFormControl.d.ts.map