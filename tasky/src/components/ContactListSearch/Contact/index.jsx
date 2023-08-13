import styles from './contact.module.scss'
import { AVATAR_URLS } from '@/utils/consts';
export function Contact(props) {

    const randomAvatarUrl = AVATAR_URLS[Math.floor(Math.random() * AVATAR_URLS.length)];
    
    return(
        <div className={styles.container}>
            <div>
                <img src={props.user.imageUrl ?? randomAvatarUrl} alt={props.user.firstName} width={20} height={20} />
                <div className={styles.details}>
                    <strong>{props.user.firstName + ' ' + props.user.lastName}</strong>
                    <span>{props.user.email}</span>
                </div>
            </div>
        </div>
    )
}