function setInputValidity(payloadObj) {
    return { type: 'SET_VALIDITY', payload: payloadObj };
}
function setFormValidity(payloadObj) {
    return { type: 'SET_FORM_VALIDITY', payload: payloadObj };
}

export default { setFormValidity, setInputValidity };
