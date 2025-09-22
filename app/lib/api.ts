export async function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export type ValidationRule = {
    required?: boolean;
    pattern?: RegExp;
    label?: string;
    message?: string;
}

export type ValidationRules = Record<string, ValidationRule>

export type ValidationReturn = {
    data: Record<string, string>;
    errors: Record<string, string>;
    isValid: boolean;
}

function capitalize(word: string) {
    return word.charAt(0) + word.slice(1)
}

export async function validateForm(
    formData : FormData, 
    validationRules: ValidationRules
) : Promise<ValidationReturn> {
    const dataObject = Object.fromEntries(formData)

    const data = Object.fromEntries(
      Object.entries(dataObject).map(([key, value]) => [key, value.toString().trim()])
    ) as Record<string, string>

    const errors: Record<string, string> = Object.fromEntries(
        Object.entries(validationRules).flatMap(([field, rule]) => {
            const value = data[field] ?? ""
            const label = rule.label ?? "This field"

            if(rule.required && !value) {
                return [[field, `${label} is required`] as const]
            }

            if(rule.pattern && value && !rule.pattern.test(value)) {
                return [[field, rule.message ?? `Invalid ${label.toLowerCase()}.`] as const]
            }

            return []
        })
    ) as Record<string, string>

    return { data, errors, isValid: Object.keys(errors).length === 0 }
}