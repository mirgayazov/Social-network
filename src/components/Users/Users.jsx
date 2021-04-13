import s from "./Users.module.css";
import axios from 'axios'
import React from "react";


class Users extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    let _id = 1;
                    let _users = response.data.items.map(u => {
                        let _u = { ...u, photoURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg", location: { country: "country", city: "city" }, id: _id };
                        _id++;
                        return _u
                    })
                    this.props.setUsers(_users)
                })
        }
    }

    render() {
        return (
            <div>
                <p>classComp</p>
                {
                    this.props.users.length === 0 ? <p>Загрузка....</p> :
                        this.props.users.map(u => {
                            return (
                                <div key={u.id} className={s.content}>
                                    <span>
                                        <div>
                                            <img src={u.photoURL} alt="img" />
                                        </div>
                                        <div>
                                            {u.followed ? <button onClick={() => { debugger; this.props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { debugger; this.props.follow(u.id) }}>Follow</button>}
                                        </div>
                                    </span>
                                    <span>
                                        <span>
                                            <div>{u.name}</div>
                                            <div>{u.status}</div>
                                        </span>
                                        <span>
                                            <div>{u.location.country}</div>
                                            <div>{u.location.city}</div>
                                        </span>
                                    </span>
                                </div>
                            )
                        })
                }
            </div>
        )
    }
}


export default Users