import { Search as SearchIcon } from '@mui/icons-material'
import { AppBar, Drawer, InputBase, Toolbar, Typography } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'
import TopMenu from './top-menu'

interface Props {
	window?: () => Window
}

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}))
export function Header(props: Props) {
	return (
		<>
			<AppBar component="nav">
				<Toolbar>
					<Drawer />
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Checkeraz
					</Typography>
					<Search sx={{ display: { xs: 'none', sm: 'block' } }}>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
					</Search>
					<TopMenu />
				</Toolbar>
			</AppBar>
		</>
	)
}
