const Label = (props) => {
    const { htmlFor,Children } = props;
    return (
        <label
            className="block text-slate-700 text-sm font-bold mb-2"
            htmlFor={htmlFor}
        >
            {Children}
        </label>
    );
};  

export default Label;