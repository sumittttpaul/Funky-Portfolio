import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Sumit_Photo from "../../public/sumit_photo.png";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function ViewPhoto({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-[530px] transform overflow-hidden rounded-2xl bg-black/60 p-6 text-left align-middle shadow-xl backdrop-blur-2xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-white lg:text-xl"
                >
                  Profile photo
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-400 lg:text-base">
                    Sumeet Kumar Paul&apos;s profile photo.
                  </p>
                </div>
                <div className="flex h-full w-full place-content-center">
                  <div className="relative mt-5 h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] lg:h-[477px] lg:w-[477px]">
                    <Image
                      fill
                      src={Sumit_Photo}
                      alt="Sumeet Kumar Paul"
                      className="rounded-full"
                      sizes="(min-width: 1024px) 477px,(min-width: 640px) 382px, 300px"
                      priority
                    />
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="absolute right-0 top-0 m-2 flex h-auto w-auto place-content-center rounded-full p-2 outline-none transition-colors hover:bg-white/10"
                >
                  <XMarkIcon height={30} width={30} className="text-gray-400" />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
