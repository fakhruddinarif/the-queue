import PropTypes from 'prop-types';

function FieldForm({ label, type, value, onChange }) {
    return (
        <div className="flex flex-col w-full justify-start items-start gap-2">
            <label htmlFor={label.toLowerCase()} className="text-sm font-medium text-neutral-800">{label}</label>
            <input
                type={type}
                id={label.toLowerCase()}
                name={label.toLowerCase()}
                value={value}
                onChange={onChange}
                className="font-normal text-sm w-full py-3 px-4 border border-gray-300 rounded-lg focus:border-blue-600"
            />
        </div>
    );
}
FieldForm.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
export default FieldForm;