import { Box, Button, Card, CardContent, CardHeader, Drawer } from '@mui/material'
import React, { useState } from 'react'
// The navigation drawers (or "sidebars") provide ergonomic access to destinations in a site or 
// app functionality such as switching accounts.
// key props:anchor--to select side, open--if true opens drawer(to open drawer by default set open={true}), 
// onClose--function to close drawer, additional button needed to set drawer open, 
// variant='permanent'--to make drawer visible always(sidebar)
// to give width,sx={{width:300,"& .MuiDrawer-paper":{width:300}}} just width won't work as it uses Paper inside it
const Drawerpractice = () => {
    const [draweropen, setDraweropen] = useState(false)
    return (
        <div>
            <Drawer open={draweropen} 
            anchor='right' 
            onClose={() => setDraweropen(false)} 
            sx={{width:300,"& .MuiDrawer-paper":{width:300}}}
                >
                <Box>
                    <Card>
                        <CardHeader title='hello world' />
                        <CardContent>
                            <ul>
                                <li>Apple</li>
                                <li>Mango</li>
                                <li>GreenApple</li>
                                <li>Orange</li>
                                <li>Kiwi</li>

                            </ul>
                        </CardContent>
                    </Card>
                </Box>
            </Drawer>
            <Button onClick={() => setDraweropen(true)}>Click</Button>
        </div>
    )
}

export default Drawerpractice
