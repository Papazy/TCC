export default function ValueLabel({ value, className = '', children, ...props }) {
    return (
        <div {...props} className={`block border border-b-2 border-black px-2 py-3 text-left font-medium text-sm text-slate-900 ` + className}>
            {value ? value : children}
        </div>
    );
}