

const UserCard = ({userInfo}) => {

    return (
        <div style={{
            width: '250px',
            height: '200px',
            background: 'white',
            borderRadius: '8px',
            boxShadow: '12px 12px 10px 10px rgba(0, 0, 0, 0.1)',
            border: '1px solid black'
        }}>
            <img />
            <h1>{userInfo.name}</h1>
            <p>{userInfo.username}</p>
        </div>
    )
}

export default UserCard;