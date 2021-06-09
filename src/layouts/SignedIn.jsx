import React from 'react'
import { Dropdown, Menu ,Image} from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://i.pinimg.com/originals/60/3b/be/603bbee66dee02294e6dde7a44d0c073.jpg" />
                <Dropdown pointing="top left" text="Uğur ">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={props.SignOut} text="Çıkış Yap" icon="info" />
                    </Dropdown.Menu>
                    </Dropdown>
            </Menu.Item>
           
        </div>
    )
}
