import {test,expect} from '@playwright/test';


//get : to access the data from the server

//post : to send the data to the server

//put : to update the data on the server
//delete : to delete the data from the server

//patch : to update the data on the server

//put vs patch : put is used to update the entire data on the server while patch is used to update the specific data on the server      





//get api testing
test('get api testing',async({request})=>{
    const response = await request.get('https://reqres.in/api/users?page=2');
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(data);
    expect(data.page).toBe(2);
    expect(data.data.length).toBe(6);
    expect(data.data[0].id).toBe(7);
});

//post api testing
test('post api testing',async({request})=>{
    const response = await request.post('https://reqres.in/api/users',{
        data:{
            name:'morpheus',
            job:'leader'
        }
    });
    expect(response.status()).toBe(201);
    const data = await response.json();
    console.log(data);
    expect(data.name).toBe('morpheus');
    expect(data.job).toBe('leader');
});

//create user with headers
test.fail('create user with headers',async({request})=>{
    const token = 'real-token';
    const response = await request.post('https://reqres.in/api/users',{
        
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        },
        data:{
            name:'Chandan Kumar',
            job:'QA Engineer'
        }
    });
    expect(response.status()).toBe(201);
    const data = await response.json();
    console.log(data);
    expect(data.name).toBe('Chandan Kumar');
    expect(data.job).toBe('All Rounder');
});
test('API Authentication using Bearer Token', async({request})=>{
    // step 1 : Login
    const loginResponse = await request.post('https://api.qaautomationlabs.com/v1/auth/login',
        {
            data:{
                email: 'qa@demo.io',
                password:'Password123'
            }
        })
console.log('Status Code:', loginResponse.status());
console.log('Error Body:', await loginResponse.text());    
    expect(loginResponse.ok()).toBeTruthy();
    //step2: get token

   const {accessToken}  = (await loginResponse.json()).data;
    
    //step 3: send token to api

    const response = await request.get(
        "https://api.qaautomationlabs.com/v1/auth/me",
        {headers: {
            "Authorization": `bearer ${accessToken}`
        }}
    );
    expect(response.ok()).toBeTruthy();

        const body=await response.json();
        console.log(body);


})

//put api testing
test('put api testing',async({request})=>{
    const response = await request.put('https://reqres.in/api/users/2',{
        data:{
            name:'Changed Name',
            job:'zion resident'
        }
    });
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(data);
    expect(data.name).toBe('Changed Name');
    expect(data.job).toBe('zion resident');
});

//patch api testing (partial update)
test('patch api testing',async({request})=>{
    const response1 = await request.get('https://reqres.in/api/users/2');
    console.log(await response1.json());
    const response = await request.patch('https://reqres.in/api/users/2',{
        data:{
            name:'Patched Name'
        }
    });
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(data);
    expect(data.name).toBe('Patched Name');
    //expect(data.job).toBe('zion resident');
}); 

//delete api testing
test('delete api testing',async({request})=>{
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
    console.log(response);
});


//Data driven testing 22 minss