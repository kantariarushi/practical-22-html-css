import React from 'react'
import './AskedQuestions.css'
import Book from '../../../../assets/images/Book.png';
// import Accordion from '../../../../components/Accordion';
import Button from '../../../../components/Button/Button';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import chevronDown from "../../../../assets/images/chevron-down.svg";
import styles from "./styles.module.css";
import OrganizeMainImage from '../../../../assets/images/organize-main-image.png';
import { useMediaQueryXL, useMediaQueryMD } from '../../../../hooks/useMediaQuery';

const AccordionItem = ({ header, ...rest }) => (
    <Item
        {...rest}
        header={
            <>
                {header}
                <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
            </>
        }
        className={styles.item}
        buttonProps={{
            className: ({ isEnter }) =>
                `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
        }}
        contentProps={{ className: styles.itemContent }}
        panelProps={{ className: styles.itemPanel }}
    />
);

function AskedQuestions() {
    const isMediumScreen = useMediaQueryXL();
    return (
        <div className='books-main-container'>
            <div className='book-heading-container'>
                <img src={Book} alt="Book image" className='book-image' />
                <div className='book-main-heading-container'>
                    <span className='question-heading'>Frequently asked questions</span>
                </div>
            </div>
            <div className='tabs-heading-container'>
                <span className='active-tab'>General</span>
                <span>Using Solo</span>
                <span>Connect Tools</span>
                <span>Workspace</span>
            </div>
            <div className={isMediumScreen ? styles.accordion : styles.accordionMobile}>
                <Accordion>
                    <AccordionItem header="How does it work?">
                        4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world.
                    </AccordionItem>

                    <AccordionItem header="Which platform do you support?">
                        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                        vitae, accumsan auctor mi.
                    </AccordionItem>

                    <AccordionItem header="How do I invite my teammates?">
                        Suspendisse massa risus, pretium id interdum in, dictum sit
                        amet ante. Fusce vulputate purus sed tempus feugiat.
                    </AccordionItem>

                    <AccordionItem header="Do you have annual plan?">
                        Suspendisse massa risus, pretium id interdum in, dictum sit
                        amet ante. Fusce vulputate purus sed tempus feugiat.
                    </AccordionItem>

                    <AccordionItem header="How to I create a new workspace?">
                        Suspendisse massa risus, pretium id interdum in, dictum sit
                        amet ante. Fusce vulputate purus sed tempus feugiat.
                    </AccordionItem>

                    <AccordionItem header="How do I set roles & permissions?">
                        Suspendisse massa risus, pretium id interdum in, dictum sit
                        amet ante. Fusce vulputate purus sed tempus feugiat.
                    </AccordionItem>
                </Accordion>
            </div>
            <div className='organize-container'>
                <h2>organize anything with anyone, anywhere</h2>
                <Button
                    value="Try it free"
                    className="ask-try-it-free"
                />
                <img src={OrganizeMainImage} alt="organize main image" className='organize-image' />
            </div>
        </div >
    )
}

export default AskedQuestions