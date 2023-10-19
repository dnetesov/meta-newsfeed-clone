import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "@/auth/firebaseAuthHelpers";
import useLoginModal from "@/hooks/useLoginModal";

function LoginModalBody() {
  const loginModal = useLoginModal();

  const handleGoogeSignIn = () => {
    signInWithGoogle();
    loginModal.onClose();
  };

  return (
    <div>
      {/* TODO: Login option button component */}
      <div className="flex flex-col py-8">
        <button
          onClick={handleGoogeSignIn}
          title="Login with Google"
          className="
            flex
            w-full
            bg-transparent
            border-solid
            border-[1px]
            border-neutral-300
            p-3
            rounded-lg
            hover:bg-neutral-700
          "
        >
          <FcGoogle size={24} />
          <span className="w-full">Login with Google</span>
        </button>
      </div>
    </div>
  );
}

export default LoginModalBody;
