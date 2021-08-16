import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const BootstrapInput = withStyles((theme) => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3)
        }
    },
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        border: "1px solid black",
        fontSize: 16,
        width: "50vw",
        padding: "10px 26px 10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        "&:focus": {
            borderRadius: 4,
            backgroundColor: theme.palette.background.paper,
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
        }
    }
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1)
    }
}));

const DropDown = ({ handleOnChange, capCityArray, city, cityError }) => {
    const classes = useStyles();

    return (
        <div className="form-container">
            <FormControl className={classes.margin}>
                <InputLabel id="demo-customized-select-label">Select a City</InputLabel>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    onChange={handleOnChange}
                    input={<BootstrapInput />}
                >
                    {capCityArray?.map((city) => (
                        <MenuItem
                            className="menu-item-drop"
                            style={{
                                backgroundColor: "rgb(39, 39, 39)",
                                color: "rgb(236, 236, 236)",
                                fontFamily: "Darker Grotesque",
                                fontSize: "1.3rem",
                                borderTop: "0.5px solid rgba(236, 236, 236, 0.055)"
                            }}
                            value={city}
                        >
                            {city}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {cityError ? (
                <h2 id="err">
                    No weather information is available for:{" "}
                    <span id="city-err">{city},</span> <br />
                    Please select another City
                </h2>
            ) : null}
        </div>
    );
};

export default DropDown;
