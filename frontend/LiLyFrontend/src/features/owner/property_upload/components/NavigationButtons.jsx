
const NavigationButtons = ({currentStep,onNext,onBack}) => {
  return (
    <div className="flex gap-3">
        {currentStep < 3 && <div>
            <button type="button" onClick={onNext}>Next</button>
        </div>}

        {currentStep > 1 && <div>
            <button type="button" onClick={onBack}>Back</button>
        </div>}

        {currentStep == 3 && <div>
            <button type="button" onClick={onNext}>Submit</button>
        </div>}

        <div>
            <button type="button" onClick={onNext}>Cancle</button>
        </div>
    </div>
  )
}
export default NavigationButtons;