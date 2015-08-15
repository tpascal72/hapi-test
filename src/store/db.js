var knex = require('knex');
var cfg = require('ls-config');

var db = knex ({
	client: "sqlite3",
	connection: {
		filename: cfg.config("liveDatabase")
	}
});

db.schema.hasTable('EmployeeProfile').then(function(exists)
{
	if (!exists)
	{
		console.log("database making employee profile!");
		return db.schema.createTable('EmployeeProfile', function(t)
		{
			t.increments('empID').primary();
			t.string('empName', 110).notNullable();
			t.string('empAddress', 110).notNullable();
			t.text('empSkillset');
			t.string('empPicture', 255);
			t.text('empDescription');
			t.string('empResume', 255);
			t.integer('empXP').notNullable();
			t.decimal('empMoneyEarned', 10,2).notNullable();
		});
	}
	else
	{
		console.log("Employee database already exists!");
	}
});

db.schema.hasTable('EmployerProfile').then(function(exists)
{
	if (!exists)
	{
		return db.schema.createTable('EmployerProfile', function(t)
		{
			t.increments('bossID').primary();
			t.string('bossName', 110).notNullable();
			t.string('bossAddress', 110).notNullable();
			t.string('bossPicture', 255);
			t.text('bossDescription');
		});
	}
});

db.schema.hasTable('Users').then(function(exists)
{
	if (!exists)
	{
		return db.schema.createTable('Users', function(t)
		{
			t.increments('userID').primary();
			t.string('userName', 100).notNullable();
			t.string('password', 100).notNullable();
			t.string('email', 255).notNullable();
			t.string('location', 20);
			t.boolean('confirmed');
			t.string('confirmedCode', 25);
			t.integer('employeeProfileID').references('empID').inTable('EmployeeProfile');
			t.integer('employerProfileID').references('bossID').inTable('EmployerProfile');
		});
	}
	else
	{
		console.log("Users table already exists!");
	}
});

db.schema.hasTable('Ads').then(function(exists)
{
	if (!exists)
	{
		return db.schema.createTable('Ads', function(t)
		{
			t.increments('adID').primary();
			t.string('adTitle', 100).notNullable();
			t.text('adDescription').notNullable();
			t.integer('adDuration');
			t.decimal('adRateOfPay', 10,2).notNullable();
			t.boolean('adJobFilled').notNullable();
			t.text('adCategory').notNullable();
			t.integer('adBossID').references('bossID').inTable('EmployerProfile');
		});
	}
});

module.exports = db;