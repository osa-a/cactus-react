import React from 'react';
import Grid from '@material-ui/core/Grid';
import GalleryElement from '../GalleryElement/GalleryElement';
import './gallery.scss';
// import { render } from '@testing-library/react';

export class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'all': true,
            'plant': false,
            'succulent': false,
            'cactus': false,
            'flower': false,
            finalData: this.props.dataGallery
        }
    }

    description(e) {
        let element = e.target;
        let data = element.getAttribute('data-id');
        data = this.bubblingElement(e, data, element);
        if (!data) {
            this.showHideDescription(data);
            return;
        }
        this.showHideDescription(data);
    }

    bubblingElement(e, data, element) {
        let dataBubble = data;
        if (!data) {
            element = e.target.parentNode;
            dataBubble = element.getAttribute('data-id');
            if (!dataBubble) {
                element = e.target.parentNode.parentNode;
                dataBubble = element.getAttribute('data-id');
                if (!dataBubble) {
                    return;
                }
                return dataBubble;
            }
            return dataBubble;
        }
        return dataBubble;
    }

    showHideDescription(data) {
        const descriptionElem = document.querySelectorAll('.main__gallery-element-description');
        for (let i = 0; i < descriptionElem.length; i++) {
            let dataDescription = descriptionElem[i].getAttribute('data-description');
            if (dataDescription !== data) {
                descriptionElem[i].classList.remove('main__gallery-element-description--show');
            } else {
                descriptionElem[i].classList.add('main__gallery-element-description--show');
            }
        }
    }

    filterSwitcher(data, filterName) {
        let filtersArr = Object.keys(data)
            .filter((element) => data[element].type)
            .map((element) => {
                return data[element].type;
            });
        filtersArr = filtersArr.reduce((unique, item) => {
            return unique.includes(item) ? unique : [...unique, item]
        }, []);

        for (let key in filtersArr) {
            if (filterName === filtersArr[key]) {
                this.setState(() => ({
                    [filtersArr[key]]: true,
                    'all': false
                }));
            }
            else {
                if (filterName === 'all') {
                    this.setState(() => ({
                        'all': true
                    }));
                }
                this.setState(() => ({
                    [filtersArr[key]]: false,
                }));
            }
        }
    }

    runFilter(e, data) {
        const filterName = e.target.getAttribute('data-filter');
        if (!filterName) {
            return;
        }

        this.filterSwitcher(data, filterName);
        let finalData = Object.keys(data)
            .filter(element => data[element].type === filterName)
            .map((element) => {
                return data[element];
            });
            console.log(finalData)
            this.setState({ finalData: finalData});
        return finalData;
    }

    render() {
        let dataGallery = this.props.dataGallery;
        let finalData = this.state.finalData;
        return (
            <section className="main__gallery" onClick={(e) => this.description(e)}>
                <div className="main__gallery-head">
                    <a href="/#" name="gallery" className="main__gallery-header">GALLERY</a>
                    <div className="main__gallery-filters" onClick={(e) => this.runFilter(e, dataGallery)}>
                        <div
                            data-filter="all"
                            className={`main__gallery-filter main__gallery-filter-all  ${this.state.all ? "main__gallery-filter--active" : ""}`} >
                            All
                    </div>
                        <div
                            data-filter="plant"
                            className={`main__gallery-filter main__gallery-filter-plants  ${this.state.plant ? "main__gallery-filter--active" : ""}`}>
                            Plants
                    </div>
                        <div
                            data-filter="succulent"
                            className={`main__gallery-filter main__gallery-filter-succulents  ${this.state.succulent ? "main__gallery-filter--active" : ""}`}>
                            Succulents
                    </div>
                        <div
                            data-filter="cactus"
                            className={`main__gallery-filter main__gallery-filter-cactuses  ${this.state.cactus ? "main__gallery-filter--active" : ""}`}>
                            Cactuses
                    </div>
                        <div
                            data-filter="flower"
                            className={`main__gallery-filter main__gallery-filter-flowers  ${this.state.flower ? "main__gallery-filter--active" : ""}`}>
                            Flowers
                    </div>
                    </div>
                </div>

                <Grid container spacing={3} onClick={(e) => this.description(e)}>
                    {Object.keys(finalData).map((element) => (
                        <Grid key={element} item xs className="main__gallery-element-container">
                            <GalleryElement
                                id={element}
                                img = {finalData[element].id}
                                name={finalData[element].name}
                                description={finalData[element].description}
                                caption={finalData[element].type}
                                alt={finalData[element].type}
                            />
                        </Grid>
                    ))}
                </Grid>
            </section >
        );
    }
}
