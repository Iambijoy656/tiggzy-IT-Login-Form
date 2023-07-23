import "./App.css";
import bg from "./assets/bg.jpg";

function App() {
  return (
    <div className="flex flex-col lg:flex-row-reverse justify-center items-center pt-20 rounded-lg max-w-[1280px] mx-auto p-20">
      <div className="w-full lg:w-3/6 max-w-lg bg-white -200 p-8 lg:p-20">
        <div className="p-2">
          <h2 className="text-xl">Welcome to EasyPayway!</h2>
          <p className="text-gray-500 text-sm">Email</p>
          <p className="text-gray-500">
            Please sign in to your account and start the adventure
          </p>
        </div>
        <div className="mt-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full"
            />
            <label className="label">
              <a href="" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </div>
      </div>

      <div
        className="bg-center bg-cover bg-no-repeat w-[640px] h-[764px] bg-[#FFFFFF];
        "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center border  ">
          <div className="-mt-12">
            <img
              className="w-[273px] mx-auto -mt-6"
              src="https://s3-alpha-sig.figma.com/img/024a/6659/44b4d7da13fb7d429e6de84a85506734?Expires=1690761600&Signature=evfWjhxIKqPmE6bNr3kUTrmr-nPdnQ9EH5yoQAb-tYsqxJ0B6Sl81Xjgf3uki8CooE8DAfBsP93Vu044P4dqZ3Ju7d8AW0WCnBfHFqII4AHNYsCJ4vJv5MvtRVdgSdyBjoI0CheOXNMIR2~usP22PpyK2QJHg5hZAY1F65frbfBsNqwEmWVZ489aLaNoxMCZFnFFd04VNoao5YpfnOznkNOY-C2N9NSLb3bdWUqmnTwdVBnqSm7UbAIg1JxWvmzxCbyUo3Akk18c-bVnMn5t62uPvGH-Z1PV-MRfdZmIPte-tZkHhRXlSylyGRYz-a-v9C8T~rB-o-C~uGSi4Or7fw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
          <p className="text-center text-xl font-bold lg:mt-0 -mb-6 ">
            Adventure Payment <br /> gateway starts here
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
