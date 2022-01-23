import { UserButton, useUser } from "@clerk/clerk-react";

const User = () => {
  const user = useUser();

  console.log(user);
  return (
    <div>
      <UserButton />
      <p>{user.web3Wallets[0].web3Wallet}</p>
    </div>
  );
};

export default User;
