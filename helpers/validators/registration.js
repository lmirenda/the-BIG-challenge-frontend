export const validateName = (value) => {
    if (!value) {
        return 'This field is required'
    }
    if (value.length < 3) {
        return 'Full name must be at least 3 characters'
    }
    return true
};
export const validatePassword = (value) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

    if (!value) {
        return 'This field is required'
    }
    if (value.length < 8) {
        return 'You password must be at least 8 characters long'
    }
    if (!regex.test(value)) {
        return 'Your password should cointain at least a number, a lowercase and an uppercase character'
    }
    return true
};
export const validateEmail = (value) => {
    if (!value) {
        return 'This field is required';
    }
    // if the field is not a valid email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
        return 'This field must be a valid email';
    }
    // All is good
    return true;
}
