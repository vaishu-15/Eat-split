

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
  <div className="app">
    <div className="sidebar">
    <FriendsList/>
    <FormAddFriend/>
    <Button>Add Friend</Button>
    
  </div>
  <FormSplitBill/>
  </div>
  );
}

function FriendsList() {
  const friends = initialFriends;

  console.log("Friends List Data:", friends);

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}


function Friend({friend}) {
  return (
  <li>
<img src={friend.image} 
     alt={friend.name}/>
   <h3>{friend.name}</h3>

{friend.balance < 0 && (
  <p className="red">
    you owe {friend.name} {Math.abs(friend.balance)}
  </p>
)
}
{friend.balance > 0 && (
  <p className="green">
    you owe {friend.name} {Math.abs(friend.balance)}
  </p>
)
}
{friend.balance === 0 && (
  <p >
    you and {friend.name} are even
  </p>
)
}
<button className="button">
  pay
</button>
  </li>
  );
}

function Button({children}){
   return <button className="button">{children}</button>;
}

function FormAddFriend(){
  return (
  <form className="form-add-friend">
    <label>Friend Name</label>
    <input type="text"/>
    <label>Image URL</label>
     <input type="text"/>
  </form>
  );
}

function FormSplitBill(){
  return(
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>Bill Value</label>
      <input type="text"/>

      <label>Your Expense</label>
      <input type="text"/>

      <label>X's expenses</label>
      <input type="text" disabled/>

      <label>Who is paying bill</label>
      <select>
        <option value="user">you</option>
        <option value="friend">X</option>
      </select>

         <button className="button">Split Bill</button>
    </form>
  );
}