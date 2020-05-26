import React from 'react';
import Grid from '@material-ui/core/Grid';
import GalleryElement from './GalleryElement/GalleryElement';
import './gallery.scss';

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

    getFilters(data) {
        let filtersArray = Object.keys(data)
            .filter((element) => data[element].type)
            .map((element) => {
                return data[element].type;
            });
        filtersArray = filtersArray.reduce((unique, item) => {
            return unique.includes(item) ? unique : [...unique, item]
        }, []);
        return filtersArray;
    }

    filterSwitcher(data, filterName) {

        let filtersArray = this.getFilters(data);

        for (let key in filtersArray) {
            if (filterName === filtersArray[key]) {
                this.setState(() => ({
                    [filtersArray[key]]: true,
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
                    [filtersArray[key]]: false,
                }));
            }
        }
    }

    runFilter(e, data) {
        const filterName = e.target.getAttribute('data-filter');
        if (!filterName) {
            return;
        }
        let finalData;

        this.filterSwitcher(data, filterName);

        if (filterName === 'all') {
            finalData = this.props.dataGallery;
        } else {
            finalData = Object.keys(data)
                .filter(element => data[element].type === filterName)
                .map((element) => {
                    return data[element];
                });
        }
        this.setState({ finalData: finalData });

        return finalData;
    }

    toUpp(string) {
        if (!string) return string;
        return string[0].toUpperCase() + string.slice(1);
    }

    render() {
        let dataGallery = this.props.dataGallery;
        let finalData = this.state.finalData;
        let filters = this.getFilters(dataGallery);
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
                        {filters.map((filter) => (
                            <div
                                data-filter={filter} key={filter}
                                className={`main__gallery-filter main__gallery-filter-${filter}  ${this.state[filter] ? "main__gallery-filter--active" : ""}`} >
                                {this.toUpp(filter)}
                            </div>
                        ))}
                    </div>
                </div>

                <Grid container spacing={3} onClick={(e) => this.description(e)}>
                    {Object.keys(finalData).map((element) => (
                        <Grid key={element} item xs className="main__gallery-element-container">
                            <GalleryElement
                                id={element}
                                img={finalData[element].id}
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
