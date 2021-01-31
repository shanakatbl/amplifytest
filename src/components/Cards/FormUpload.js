import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    }
}));

export default function SimpleSelect() {
    const classes = useStyles();
    const [template, setTemplate] = React.useState('');
    const [file, setFile] = React.useState();

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(file, template);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <FormControl required className={classes.formControl}>
                    <InputLabel id="demo-simple-select-required-label">Template</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={template}
                        onChange={event => setTemplate(event.target.value)}
                        className={classes.selectEmpty}
                    >
                        <MenuItem value={'TemplateType01'}>Template 01</MenuItem>
                        <MenuItem value={'TemplateType02'}>Template 02</MenuItem>
                        <MenuItem value={'TemplateType03'}>Template 03</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
                <br />
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    type="file"
                    value={file}
                    onChange={event => setFile(event.target.files[0])}
                />
                <label
                    htmlFor="contained-button-file"
                >
                    <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onSubmit={onSubmit}
                >
                    Upload
                </Button>
            </form>
        </div>
    );
}
