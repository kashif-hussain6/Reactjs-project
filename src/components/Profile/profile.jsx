const user = {
  imageUrl:
    "https://unicorn-cdn.b-cdn.net/a757ba26-cd77-49b9-b7f5-c13bc7243f09/qnmrmdlg-400x400-(2).png?width=400&height=400",
};

export default function Profile() {
  return (
    <div className="flex flex-col items-center">
      <div className=" bg-slate-200 p-2  rounded-full mt-20 ">
        <img
          className=" rounded-full mx-auto block w-32  "
          src={user.imageUrl}
          alt="User's profile"
        />
      </div>

      <div className="text-center">
        <h1 className="text-[29px] font-semibold mt-4 ">John Rush</h1>
        <p>Founder in a rush. Openly sharing process daily.</p>
        <p>→$2M+ ARR →100k+ users on b2b</p>
        <p>→10M+ users on b2b2c</p>
      </div>

    </div>
  );
}
