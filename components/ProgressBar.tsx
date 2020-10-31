import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});


// @ts-ignore
const round = (value, decimals) => Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);

export const ProgressBar = ({ numerator, denominator, ...props }: { numerator: number, denominator: number }) => {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);


    React.useEffect(() => {
        console.log({ numerator, denominator })
        if (denominator === 0) {
            setProgress(0)
            return;
        }
        let prog = round((numerator / denominator), 2);


        setProgress(prog);

    }, [numerator, denominator]);

    return (
        <div className={classes.root}>
            <Box display="flex" alignItems="center">
                <Box width="100%" mr={1}>
                    <LinearProgress variant="determinate" value={progress} {...props} />
                </Box>
                <Box minWidth={35}>
                    <Typography variant="body2" color="textSecondary">{`${progress}%`}</Typography>
                </Box>
            </Box>
        </div>
    );
}