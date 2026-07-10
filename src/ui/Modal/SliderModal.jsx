import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { X } from "lucide-react";
import { Fragment } from "react";
import Button from "../Button/Button";


export const SliderModal = ({ isOpen, handleCloseModal, title, containerClass, children }) => {
    return (
        <Transition as={Fragment} appear show={isOpen}>
            <Dialog as="div" onClose={() => { }}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out transform duration-300"
                    enterFrom="opacity-0 "
                    enterTo="opacity-100"
                    leave="ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 z-50 bg-black/30" />
                </TransitionChild>
                <div className="fixed inset-0 overflow-y-auto z-50 overflow-x-hidden ">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out transform duration-300"
                        enterFrom="opacity-0 translate-x-32"
                        enterTo="opacity-100 translate-x-0"
                    >
                        <div className="flex h-screen items-center justify-center p-4 ">
                            <DialogPanel
                                className={`fixed top-0  right-0 h-screen w-120 bg-white py-6 
                 flex flex-col gap-4 shadow-xl ${containerClass}`}
                            >
                                <section
                                    className="flex  items-center justify-between border-b
                 border-borderSecondary pb-2 px-4"
                                >
                                    <h1 className="font-semibold text-lg text-[#171717]">{title}</h1>
                                    <Button
                                        className="text-[#171717] flex gap-2"
                                        icon={<X className="size-5" />}

                                        buttonType="tertiary"
                                        onClick={handleCloseModal}
                                    />

                                </section>
                                {children}
                            </DialogPanel>
                        </div>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    )
}
