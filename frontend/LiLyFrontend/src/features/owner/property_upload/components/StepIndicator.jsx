
const StepIndicator = ({currentStep})=>{
    const steps = [1,2,3];
    return (
        <div className="flex gap-2 mb-10">
          {steps.map((step) => (
        <div
          key={step}
          className={`h-1 flex-1 rounded-full ${
            step <= currentStep
              ? "bg-brand-primary"
              : "bg-gray-200"
          }`}
        />
      ))}
           
        </div>
    )
}

export default StepIndicator;


