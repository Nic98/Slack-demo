import './Add.css'
import { Button } from '@material-ui/core'
import { useState } from 'react'
import { CometChat } from '@cometchat-pro/chat'

function Add() {
    const [channel, setChannel] = useState('')
    const [privacy, setPrivacy] = useState('')
    const [loading, setLoading] = useState(false)

    const addChannel = () => {
        setLoading(true)
        if (channel === '' || privacy === '') {
            setLoading(false)
            alert('Please fill the form completely')
            return null
        }
        console.log(privacy)
        cometChatCreateGroup({
            channel,
            privacy,
            guid: generateGUID(),
        })
    }

    /*
    Function for creating group by cometChat API
    */
    const cometChatCreateGroup = (data) => {
        // group id, group name and group type, password is empty
        const GUID = data.guid
        const groupName = data.channel
        // false is private, true is public  
        let groupType = data.privacy
        if (groupType === "true") {
            groupType = CometChat.GROUP_TYPE.PUBLIC
        } else {
            groupType = CometChat.GROUP_TYPE.PRIVATE
        } 
        const password = ''

        const group = new CometChat.Group(GUID, groupName, groupType, password)
        
        // backend API to create a group
        CometChat.createGroup(group)
        .then((group) => {
            console.log('Group created successfully:', group)
            resetForm()
            // jump to the newly created channel
            window.location.href = `/channels/${data.guid}`
            setLoading(false)
        })
        .catch((error) => {
            console.log('Group creation failed with exception:', error)
            setLoading(false)
        })
    }

    /*
    This function is to generate a random GUID
    */
    const generateGUID = (length = 20) => {
        var result = []
        var characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        var charactersLength = characters.length
        for (var i = 0; i < length; i++) {
        result.push(
            characters.charAt(Math.floor(Math.random() * charactersLength))
        )
        }
        return result.join('')
    }

    /*
    Reset the form for creating channel
    */
    const resetForm = () => {
        setChannel('')
        setChannel('')
    }

    return (
        <div className="add">
            <form className="add__container">
                <img src="/logo.png" alt="Slack Logo" />
                <h1>Add New Channel</h1>
                <div className="add__form">
                    <input
                        name="channel"
                        value={channel}
                        placeholder="Channel Name"
                        onChange={(e) => setChannel(e.target.value)}
                        required
                    />
                </div>

                <div className="add__form">
                    <select
                    name="privacy"
                    value={privacy}
                    onChange={(e) => setPrivacy(e.target.value)}
                    required
                    >
                        <option value={''}>Select privacy</option>
                        <option value={true}>Public</option>
                        <option value={false}>Private</option>
                    </select>
                </div>

                <Button onClick={addChannel}>
                    // if loading is true then show a div which id is loading
                    {!loading ? 'Create Channel' : <div id="loading"></div>}
                </Button>
            </form>
        </div>
    )
}

export default Add
