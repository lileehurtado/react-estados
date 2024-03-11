function Alert ({ alertMsg, alertCase}) {
    return (
        <div>
            <div className={`alert-${alertCase}`}>
                {alertMsg}
            </div>
        </div>
    );
  };
  
  export default Alert;