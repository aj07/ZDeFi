import React, { useContext } from 'react'
import { Market, User } from '../../context'
import Content from '../atoms/Content'
import { ReactComponent as AiCommons } from '../../img/aicommons.svg'
import styles from './Footer.module.scss'

import meta from '../../data/meta.json'
import VersionNumbers from '../molecules/VersionNumbers'

export default function Footer() {
    const market = useContext(Market)
    const user = useContext(User)

    return (
        <footer className={styles.footer}>
            <aside className={styles.stats}>
                <Content wide>
                    <p>
                        Online since Jan 2020.
                        
                    </p>
                    <p className={styles.aicommons}>
                        Proud supporter of Data.Gov.Sg &{' '}
                        <a
                            href="https://data.gov.sg/"
                            title="data.gov.sg"
                        >
                            <AiCommons />
                        </a>
                    </p>
                    <VersionNumbers account={user.account} minimal />
                </Content>
            </aside>

            
        </footer>
    )
}
