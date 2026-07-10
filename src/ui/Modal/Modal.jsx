import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import Button from "../Button/Button";
import { X } from "lucide-react";

const Modal = ({
    isOpen,
    isLoading,
    title,
    description,
    containerClass,
    children,
    disableXmark,
    handleCloseModal,
    icon,
    descriptionWidth,
}) => {
    return (
        <Transition as={Fragment} appear show={isOpen}>
            <Dialog as="div" onClose={() => { }}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 z-50 bg-black/25" />
                </TransitionChild>
                <div className="fixed inset-0 overflow-y-auto z-50">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            className={`min-w-max bg-white rounded-lg p-6 flex flex-col gap-3 shadow-xl ${containerClass}`}
                        >
                            <section className="flex relative items-center justify-between  ">
                                <div>
                                    <h1 className="text-md font-medium text-[#171717] text-ellipsis flex gap-2 items-center">
                                        {icon}

                                        {title}
                                    </h1>
                                    <p
                                        className={`tw-sub-heading max-sm:hidden ${descriptionWidth}`}
                                    >
                                        {description}
                                    </p>
                                </div>
                                <Button
                                    className="text-[#A3A3A3] h-2.5 w-2.5"
                                    icon={<X className="size-5" />}
                                    buttonType="tertiary"
                                    onClick={handleCloseModal}
                                    disabled={disableXmark}
                                />
                            </section>
                            {isLoading ? (
                                <div className="h-56 bg-lightGray rounded-lg animate-pulse" />
                            ) : (
                                children
                            )}
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal