import styles from './index.module.scss';

function PageTitle(props: { name: string, sub: boolean | string }) {
    return (
        <div className={styles['page-title']}>
            <div className={styles['title-content']}>
                <h1 className={styles['main-title']}>{props.name}</h1>
                {props.sub ? <h5 className={styles['sub-title']}>{props.sub}</h5> : ''}
            </div>
        </div>
    );
}

export default PageTitle;
