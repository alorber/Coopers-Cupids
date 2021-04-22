import React, {Component} from "react";
import {Box, Button, Flex, Stack} from "@chakra-ui/react";
import NavBarToggleButton from "../../ui/NavBarToggleButton/NavBarToggleButton";
import NavBarLink from "../../ui/NavbarLink/NavBarLink";

// Sets types
type NavBarProps = {isLoggedIn: boolean; updateLogin: () => void};
type NavBarState = {isOpen: boolean};

class NavBar extends Component<NavBarProps, NavBarState> {
    constructor(props: NavBarProps) {
        super(props);
        this.state = {isOpen: false};
    }

    // Toggle Navbar state on small screens
    toggleNavBar = () => {this.setState({isOpen: !this.state.isOpen});}

    // TODO: Only show home page when not logged in
    render() {
        return (
            <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="fill" mb={8} p={8}>
                <NavBarToggleButton onToggle={this.toggleNavBar} isOpen={this.state.isOpen} />
                <Box display={{ base: this.state.isOpen ? "block" : "none", md: "block" }}
                     flexBasis={{ base: "100%", md: "auto" }}>
                    <Stack spacing={8} align="center" justify={["center", "space-between", "flex-end", "flex-end"]}
                        direction={["column", "row", "row", "row"]} pt={[4, 4, 0, 0]}>
                        <NavBarLink linkTo={"/"}>Home</NavBarLink>
                        {this.props.isLoggedIn ?
                            <NavBarLink linkTo={"/Profile"}>Profile</NavBarLink>
                            : null }
                        {this.props.isLoggedIn ?
                            <NavBarLink linkTo={"/Feed"}>Feed</NavBarLink>
                            : null }
                        {this.props.isLoggedIn ?
                            <NavBarLink linkTo={"/Messages"}>Messages</NavBarLink>
                            : null }
                        {this.props.isLoggedIn ?
                            <Button onClick={this.props.updateLogin}>Logout</Button>
                            : null }
                    </Stack>
                </Box>
                {/* TODO: Add settings icon for "change password" and "logout" */}
            </Flex>
        );
    }
}

export default NavBar;