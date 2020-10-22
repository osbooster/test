exports.printMsg = function (props) {
    console.log("This is a message from the demo package");
    let _this = {
        wrapperClass: props.wrapperClass || "slds-form-element__control",
        type: props.type || "text",
        name: props.name || "name",
        placeholder: props.placeholder || props.name,
        label: props.label || props.name,
        maxLength: props.maxLength || "250",
        required: props.required || props.required === "true",
        value: props.value,
        className: props.className || "slds-input"

    };
    return (
        <div className="col-lg-6 col-sm-6">
            <div className="slds-form-element">
                <label className="slds-form-element__label" >
                    {_this.required && <abbr className="slds-required" title="required">* </abbr>}
                    {_this.label}
                </label>
                <div className={_this.wrapperClass}>
                    <input type={_this.type}
                        name={_this.name}
                        placeholder={_this.placeholder}
                        onChange={(e) => props.handleChange(this, e)}
                        value={props.value || ''}
                        maxLength={_this.maxLength}
                        className={_this.className}
                        required={_this.required}
                    />
                </div>
            </div>
        </div>
    )
}