interface ToggleProps {
    label: string;
    value1: boolean;
    setValue1: Function;
  }
  
  const ToggleOther: React.FC<ToggleProps> = ({ label, value1, setValue1 }) => {
    const handleChange = () => {
      setValue1(!value1);
    };
  
    console.log("value", value1);
    
  
    return (
      <div className="flex items-center space-x-3">
        <span>{label}</span>
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="toggle"
              className="hidden"
              checked={value1} // Use the value passed from parent
              onChange={handleChange} // Trigger state update on change
            />
            <div
              className={`block w-14 h-8 rounded-full transition-colors ${
                value1 ? "bg-violetAltPrimary" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
                value1 ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </div>
        </label>
      </div>
    );
  };
  
  export default ToggleOther;