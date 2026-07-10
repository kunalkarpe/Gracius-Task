import Button from '../../../ui/Button/Button'
import Modal from '../../../ui/Modal/Modal'

const AddTypeModal = ({ handleChange, handleClose, isOpen, value, handleSubmit }) => {
    return (
        <Modal
            containerClass={"w-[100px]"}
            description={""}
            descriptionWidth={""}
            handleCloseModal={handleClose}
            isOpen={isOpen}
            title={'Create Customer View'}

        >
            <div className="flex flex-col gap-1.5">

                <label htmlFor="Name" className=' text-xs font-medium text-[#404040]'>Enter View Name <span className='text-error'>*</span></label>
                <input type="text" className=' outline-none w-full py-2 px-3 h-9 rounded-sm ring-1 ring-[#D4D4D4] text-sm font-normal text-[#171717]' placeholder='Daily review...' value={value} onChange={handleChange} />
            </div>
            <div className="flex gap-3 border-t border-borderSecondary pt-4">

                <Button btnText={"Cancel"} onClick={handleClose} buttonType={"secondary"} className='w-42.5 h-10!' type='button' />
                <Button btnText={"Create View"} onClick={handleSubmit} buttonType={"primary"} className='w-42.5 h-10!' type='submit' />

            </div>
        </Modal>
    )
}

export default AddTypeModal
