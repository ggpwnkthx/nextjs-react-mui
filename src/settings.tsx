import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';

export const sitename = "My Cool Site"
export const navigation = [
    {
        id: 'Build',
        children: [
            { id: 'Authentication', icon: <PeopleIcon /> },
            { id: 'Database', icon: <DnsRoundedIcon /> },
            { id: 'Storage', icon: <PermMediaOutlinedIcon /> },
            { id: 'Hosting', icon: <PublicIcon /> },
            { id: 'Functions', icon: <SettingsEthernetIcon /> },
            { id: 'Machine learning', icon: <SettingsInputComponentIcon /> },
        ],
    },
    {
        id: 'Quality',
        children: [
            { id: 'Analytics', icon: <SettingsIcon /> },
            { id: 'Performance', icon: <TimerIcon /> },
            { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
        ],
    },
];