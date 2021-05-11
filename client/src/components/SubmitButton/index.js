function SubmitButton(props) {
    return (
        <div>
            <button className="btn waves-effect waves-light" type="submit" name="action" {...props}>Submit
                {/* <i class="material-icons right">send</i> */}
            </button>
        </div>
    )
}

export default SubmitButton
