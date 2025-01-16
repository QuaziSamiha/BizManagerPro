interface ToggleProps {
  label: string;
  value: boolean;
  setValue: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ label,value, setValue }) => {
  

  return (
    <div className="flex items-center space-x-3">
      <span>{label}</span>
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative" onClick={setValue}>
          <div
            className={`block w-14 h-8 rounded-full transition-colors ${
              value ? "bg-violetAltPrimary" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
              value ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
