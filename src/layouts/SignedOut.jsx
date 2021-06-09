import React from 'react'
import { Button, ButtonOr, Menu } from 'semantic-ui-react'

export default function SignedOut({SignIn}) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={SignIn} primary>Giriş Yap</Button>
                <Button primary style={{marginLeft:'0.5em'}}>Kayıt Ol</Button>
            </Menu.Item>
        </div>
    )
}
